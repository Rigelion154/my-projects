import getCarImage from '../../utils/get-car-image';
import ComponentCreator from '../../utils/component-creator';
import ButtonComponentCreator from '../../utils/button-component-creator';
import Storage from '../../utils/storage';
import EditTool from '../main/garage/edit-tool';
import GarageView from '../main/garage/garage-view';
import Modal from '../main/winners/winner-modal';
import {
  createWinner,
  deleteCar,
  deleteWinner,
  editWinner,
  getCars,
  getWinners,
  switchCarEngine,
} from '../../utils/api';

type EngineResponse = {
  velocity: number;
  distance: number;
};

export default class Car {
  deleteButton: ButtonComponentCreator;
  selectButton: ButtonComponentCreator;
  startButton: ButtonComponentCreator;
  stopButton: ButtonComponentCreator;
  carImage: HTMLElement;
  id: number;
  name: string;
  color: string;
  time: number;
  winsCounter: number;
  editTool: EditTool;
  garage: GarageView;
  cars: Car[];
  constructor(editTool: EditTool, garage: GarageView) {
    this.id = 0;
    this.name = '';
    this.color = '';
    this.winsCounter = 1;
    this.time = 0;
    this.cars = [];
    this.editTool = editTool;
    this.garage = garage;
    this.deleteButton = new ButtonComponentCreator('button__car car__delete', 'Delete');
    this.selectButton = new ButtonComponentCreator('button__car car__select', 'Select');
    this.startButton = new ButtonComponentCreator('button__car car__start', 'Start');
    this.stopButton = new ButtonComponentCreator('button__car car__stop', 'Stop');
    this.carImage = new ComponentCreator('car__image').getElement();
    this.setButtonsCallback();
  }

  setButtonsCallback() {
    this.deleteButton.setCallback(async () => {
      await deleteCar(this.id);
      await this.garage.setButtonsStatus();
      const { winners } = await getWinners();
      const exWinner = winners.find((winner) => winner.id === this.id);
      if (exWinner) await deleteWinner(this.id);
      await this.renderCars();
    });
    this.selectButton.setCallback(() => {
      Storage.editCarId = this.id;
      this.editTool.editSelectHandler(this.name, this.color);
    });
    this.startButton.setCallback(async () => {
      this.soloRaceButtonsDisable();
      await this.startCar();
    });
    this.stopButton.setCallback(async () => {
      await this.stopEngine();
      this.soloRaceButtonsEnable();
    });
    this.stopButton.getElement().disabled = true;
  }

  startRace(speeds: number[]) {
    this.cars.forEach(async (car, index) => {
      try {
        const speed = speeds[index];
        car.startCarRace(speed);
        await switchCarEngine(car.id, 'drive');
      } catch (error) {
        car.carFailRace();
      }
    });
  }

  carFailRace() {
    this.carImage.style.animationPlayState = 'paused';
  }

  async startEngine() {
    const engine: EngineResponse = await switchCarEngine(this.id, 'started');
    const speed = engine.distance / engine.velocity;
    this.time = Math.floor((speed / 1000) * 100) / 100;
    return this.time;
  }

  async stopEngine() {
    const speed = await switchCarEngine(this.id, 'stopped');
    this.setAnimationCar(speed, 'none', '', 'unset');
  }

  async startCar() {
    try {
      const speed = await this.startEngine();
      this.setAnimationCar(speed, 'forwards', 'linear', 'solo');
      await switchCarEngine(this.id, 'drive');
    } catch (error) {
      this.carFailRace();
    }
  }

  startCarRace(speed: number) {
    this.setAnimationCar(speed, 'forwards', 'linear', 'race');
  }

  setAnimationCar(speed: number, mode: string, timingFunc: string, name: string) {
    this.carImage.style.animationDuration = `${speed}s`;
    this.carImage.style.animationFillMode = `${mode}`;
    this.carImage.style.animationTimingFunction = `${timingFunc}`;
    this.carImage.style.animationName = `${name}`;
    this.carImage.style.animationPlayState = 'running';
  }

  getCarContainer(id: number, name: string, color: string): HTMLElement {
    this.id = id;
    this.name = name;
    this.color = color;
    const buttons = new ComponentCreator('car__buttons').getElement();
    buttons.append(
      this.selectButton.getElement(),
      this.deleteButton.getElement(),
      this.startButton.getElement(),
      this.stopButton.getElement()
    );
    const container = new ComponentCreator('car').getElement();
    this.carImage.innerHTML = getCarImage(color);
    const carTitle = new ComponentCreator('car__title', 'h3').getElement();
    carTitle.textContent = name;
    const carView = new ComponentCreator('car__view').getElement();
    const carFlag = new ComponentCreator('car__flag').getElement();
    carView.append(carTitle, this.carImage, carFlag);
    container.append(buttons, carView);
    return container;
  }

  async renderCars() {
    this.garage.carContainer.innerHTML = '';
    const { cars, totalCars } = await getCars();
    this.garage.title.textContent = `Garage (${totalCars})`;
    this.garage.pagesCount.textContent = `Page #${Storage.currentGaragePage}`;
    this.cars = [];
    Storage.isAnimationEnd = false;
    cars.forEach((car) => {
      const carEl = new Car(this.editTool, this.garage);
      this.cars.push(carEl);
      this.garage.carContainer.append(carEl.getCarContainer(car.id, car.name, car.color));
    });
  }

  setWinners(modal: Modal) {
    this.carImage.addEventListener('animationend', async (event) => {
      if (!Storage.isAnimationEnd && event.animationName === 'race') {
        Storage.isAnimationEnd = true;
        modal.setContent(this.name, this.time);
        modal.openModal();
        await this.setUp(this.id);
      }
    });
  }

  async setUp(id: number) {
    const { winners } = await getWinners();
    const exWinner = winners.find((winner) => winner.id === id);
    if (exWinner) {
      const besTime = exWinner.time > this.time ? this.time : exWinner.time;
      await editWinner(exWinner.wins + 1, besTime, id);
    } else {
      await createWinner(this.id, this.winsCounter, this.time);
    }
  }

  soloRaceButtonsDisable() {
    this.stopButton.getElement().disabled = false;
    this.startButton.getElement().disabled = true;
  }

  soloRaceButtonsEnable() {
    this.stopButton.getElement().disabled = true;
    this.startButton.getElement().disabled = false;
  }
  raceButtonsDisable() {
    this.startButton.getElement().disabled = true;
    this.stopButton.getElement().disabled = true;
    this.selectButton.getElement().disabled = true;
    this.deleteButton.getElement().disabled = true;
  }
  raceButtonsEnable() {
    this.startButton.getElement().disabled = false;
    this.stopButton.getElement().disabled = true;
    this.selectButton.getElement().disabled = false;
    this.deleteButton.getElement().disabled = false;
  }
}
