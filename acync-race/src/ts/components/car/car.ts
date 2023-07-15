import getCarImage from '../../utils/get-car-image';
import ComponentCreator from '../../utils/component-creator';
import ButtonComponentCreator from '../../utils/button-component-creator';
import Storage from '../../utils/storage';
import EditTool from '../main/garage/edit-tool';
import GarageView from '../main/garage/garage-view';
import Modal from '../main/winners/winner-modal';

type CarResponse = {
  name: string;
  color: string;
  id: number;
};

type EngineResponse = {
  velocity: number;
  distance: number;
};

export default class Car {
  static url = 'http://127.0.0.1:3000';
  static path = {
    garage: '/garage',
    winners: '/winners',
  };
  carElement: HTMLElement;
  deleteButton: ButtonComponentCreator;
  selectButton: ButtonComponentCreator;
  startButton: ButtonComponentCreator;
  stopButton: ButtonComponentCreator;
  carImage: HTMLElement;
  id: number;
  name: string;
  time: number;
  winsCounter: number;
  editTool: EditTool;
  garage: GarageView;
  cars: Car[];
  isWin: boolean;
  constructor(editTool: EditTool, garage: GarageView) {
    this.editTool = editTool;
    this.garage = garage;
    this.id = 0;
    this.cars = [];
    this.winsCounter = 1;
    this.deleteButton = new ButtonComponentCreator('button__car car__delete', 'Delete');
    this.deleteButton.setCallback(this.deleteCar.bind(this));
    this.selectButton = new ButtonComponentCreator('button__car car__select', 'Select');
    this.selectButton.setCallback(this.getEditCar.bind(this));
    this.startButton = new ButtonComponentCreator('button__car car__start', 'Start');
    this.startButton.setCallback(this.startCar.bind(this));
    this.stopButton = new ButtonComponentCreator('button__car car__stop', 'Stop');
    this.stopButton.setCallback(this.stopEngine.bind(this));
    this.carElement = new ComponentCreator('car').getElement();
    this.carImage = new ComponentCreator('car__image').getElement();
    this.isWin = true;
    this.name = '';
    this.time = 0;
    // this.raceStartHandler();
  }

  async createCar(name: string, color: string) {
    const garage = await fetch(`${Car.url}${Car.path.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
      }),
    });
    const car: CarResponse = await garage.json();
    await this.renderCars();
    return car;
  }

  async deleteCar() {
    const garage = await fetch(`${Car.url}${Car.path.garage}/${this.id}`, { method: 'DELETE' });
    const car: CarResponse = await garage.json();
    await this.garage.setButtonsStatus();
    await this.renderCars();
    return car;
  }

  async editCar(name: string, color: string, id: number) {
    const garage = await fetch(`${Car.url}${Car.path.garage}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
      }),
    });
    const car: CarResponse = await garage.json();
    await this.renderCars();
    return car;
  }

  async getEditCar() {
    const garage = await fetch(`${Car.url}${Car.path.garage}/${this.id}`);
    const car: CarResponse = await garage.json();
    this.editTool.editTextInput.getElement().value = car.name;
    this.editTool.editTextInput.getElement().disabled = false;
    this.editTool.editColorInput.value = car.color;
    this.editTool.editHandler();
    Storage.editCarId = car.id;
  }

  async switchCarEngine(id: number, status: string) {
    const garage = await fetch(`${Car.url}/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const response = await garage.json();
    return response;
  }

  async startCar() {
    const speed = await this.startEngine();
    this.carImage.style.animationDuration = `${speed}ms`;
    this.carImage.style.animationFillMode = 'forwards';
    this.carImage.style.animationName = 'solo';
  }

  startRace(speeds: number[]) {
    this.cars.forEach(async (car, index) => {
      try {
        const speed = speeds[index];
        car.carRace(speed);
        await car.switchCarEngine(car.id, 'drive');
      } catch (error) {
        car.carFailRace();
      }
    });
  }

  carRace(speed: number) {
    this.carImage.style.animationDuration = `${speed}ms`;
    this.carImage.style.animationFillMode = 'forwards';
    this.carImage.style.animationTimingFunction = 'linear';
    this.carImage.style.animationName = 'race';
  }

  carFailRace() {
    this.carImage.style.animationPlayState = 'paused';
  }

  async startEngine() {
    const engine: EngineResponse = await this.switchCarEngine(this.id, 'started');
    const speed = engine.distance / engine.velocity;
    this.time = Math.floor((speed / 1000) * 100) / 100;
    return speed;
  }

  async stopEngine() {
    const animationDuration = await this.switchCarEngine(this.id, 'stopped');
    this.carImage.style.animationDuration = `${animationDuration}s`;
    this.carImage.style.animationFillMode = 'none';
    this.carImage.style.animationName = '';
    this.carImage.style.animationPlayState = 'unset';
  }

  getCarContainer(id: number, name: string, color: string): HTMLElement {
    this.id = id;
    this.name = name;
    const buttons = new ComponentCreator('car__buttons').getElement();
    buttons.append(
      this.selectButton.getElement(),
      this.deleteButton.getElement(),
      this.startButton.getElement(),
      this.stopButton.getElement()
    );

    this.carImage.innerHTML = getCarImage(color);

    const carTitle = new ComponentCreator('car__title', 'h3').getElement();
    carTitle.textContent = name;

    const carView = new ComponentCreator('car__view').getElement();
    carView.append(carTitle, this.carImage);

    this.carElement.append(buttons, carView);
    return this.carElement;
  }

  async renderCars() {
    this.garage.carContainer.innerHTML = '';
    const garage = await fetch(
      `${Car.url}${Car.path.garage}?_page=${Storage.currentPage}&_limit=${Storage.maxPageItem}`
    );
    const cars: CarResponse[] = await garage.json();

    const totalCars = garage.headers.get('X-Total-Count');
    this.garage.title.textContent = `Garage (${totalCars})`;
    this.garage.pagesCount.textContent = `Page #${Storage.currentPage}`;
    this.cars = [];
    cars.forEach((car) => {
      const carEl = new Car(this.editTool, this.garage);
      this.cars.push(carEl);
      this.garage.carContainer.append(carEl.getCarContainer(car.id, car.name, car.color));
    });
  }

  getWinners(modal: Modal) {
    this.carImage.addEventListener('animationend', (event) => {
      if (Storage.winner.length === 0 && event.animationName === 'race') {
        const winner = {
          id: this.id,
          winCount: this.winsCounter,
        };
        Storage.winner.push(winner);
        const existingWinner = Storage.winners.find((winners) => winners.id === this.id);
        if (existingWinner) {
          existingWinner.winCount += 1;
        } else {
          Storage.winners.push(Storage.winner[0]);
        }
        console.log(Storage.winner);
        console.log(Storage.winners);
        modal.setContent(this.name, this.time);
        modal.openModal();
      }
      return this.id;
    });
  }
}
