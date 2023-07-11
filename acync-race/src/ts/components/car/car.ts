import getCarImage from '../../utils/get-car-image';

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
  deleteButton: HTMLButtonElement;
  constructor() {
    this.deleteButton = document.createElement('button');
  }

  async getCars(container: HTMLElement) {
    const garage = await fetch(`${Car.url}${Car.path.garage}`);
    const cars: CarResponse[] = await garage.json();
    cars.forEach((car) => {
      container.append(this.getCarContainer(car.id, car.name, car.color));
    });
    // return cars;
  }

  // static getCar = async (id: number) => {
  //   const garage = await fetch(`${Car.url}${Car.path.garage}/${id}`);
  //   const car: CarResponse = await garage.json();
  //   return car;
  // };

  static createCar = async (brand: string, color: string) => {
    const garage = await fetch(`${Car.url}${Car.path.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: brand,
        color,
      }),
    });

    const car: CarResponse = await garage.json();
    return car;
  };

  async deleteCar(id: number) {
    const garage = await fetch(`${Car.url}${Car.path.garage}/${id}`, { method: 'DELETE' });
    const car: CarResponse = await garage.json();
    return car;
  }

  getCarContainer(id: number, name: string, color: string): HTMLElement {
    const container = document.createElement('div');
    container.className = 'car';
    container.dataset.id = id.toString();
    const selectButton = document.createElement('button');
    selectButton.className = 'button car__select';
    selectButton.textContent = 'Select';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button car__delete';
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.id = id.toString();
    const buttons = document.createElement('div');
    buttons.className = 'car__buttons';
    buttons.append(selectButton, deleteButton);
    const carTitle = document.createElement('h3');
    carTitle.className = 'car__title';
    carTitle.textContent = name;
    const carImage = document.createElement('div');
    carImage.className = 'car__image';
    carImage.innerHTML = getCarImage(color);
    container.append(carTitle, carImage, buttons);

    return container;
  }

  async renderCar(brand: string, color: string, element: HTMLElement) {
    const car = await Car.createCar(brand, color);
    const container = await this.getCarContainer(car.id, car.name, car.color);
    element.append(container);
  }
}
