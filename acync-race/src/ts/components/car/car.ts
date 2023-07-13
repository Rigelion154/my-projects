import getCarImage from '../../utils/get-car-image';
import ComponentCreator from '../../utils/component-creator';
import ButtonComponentCreator from '../../utils/button-component-creator';
import Storage from '../../utils/storage';
import EditTool from '../main/garage/edit-tool';
import GarageView from '../main/garage/garage-view';

type CarResponse = {
  name: string;
  color: string;
  id: number;
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
  id: number;
  editTool: EditTool;
  garage: GarageView;
  constructor(editTool: EditTool, garage: GarageView) {
    this.editTool = editTool;
    this.garage = garage;
    this.id = 0;
    this.deleteButton = new ButtonComponentCreator('button__car car__delete', 'Delete');
    this.deleteButton.setCallback(this.deleteCar.bind(this));
    this.selectButton = new ButtonComponentCreator('button__car car__select', 'Select');
    this.selectButton.setCallback(this.getEditCar.bind(this));
    this.startButton = new ButtonComponentCreator('button__car car__start', 'Start');
    this.stopButton = new ButtonComponentCreator('button__car car__stop', 'Stop');
    this.carElement = new ComponentCreator('car').getElement();
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

  async deleteCar() {
    const garage = await fetch(`${Car.url}${Car.path.garage}/${this.id}`, { method: 'DELETE' });
    const car: CarResponse = await garage.json();
    await this.renderCars();
    await this.garage.setButtonsStatus();
    return car;
  }

  getCarContainer(id: number, name: string, color: string): HTMLElement {
    this.id = id;
    const buttons = new ComponentCreator('car__buttons').getElement();
    buttons.append(
      this.selectButton.getElement(),
      this.deleteButton.getElement(),
      this.startButton.getElement(),
      this.stopButton.getElement()
    );

    const carImage = document.createElement('div');
    carImage.className = 'car__image';
    carImage.innerHTML = getCarImage(color);

    const carTitle = new ComponentCreator('car__title', 'h3').getElement();
    carTitle.textContent = name;

    const carView = new ComponentCreator('car__view').getElement();
    carView.append(carTitle, carImage);

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
    cars.forEach((car) => {
      const carEl = new Car(this.editTool, this.garage).getCarContainer(car.id, car.name, car.color);
      this.garage.carContainer.append(carEl);
    });
  }
}
