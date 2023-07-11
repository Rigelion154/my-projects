import HeaderView from './header/header-view';
import MainView from './main/main-view';
import FooterView from './footer/footer-view';
import GarageView from './main/garage/garage-view';
import Car from './car/car';
// import AppController from '../utils/app-controller';

export default class App {
  header: HeaderView;
  main: MainView;
  garage: GarageView;
  car: Car;
  // controller: AppController;
  constructor() {
    this.header = new HeaderView();
    this.main = new MainView();
    this.garage = new GarageView();
    this.car = new Car();
    this.createButtonHandler();
    this.deleteButtonHandler();
    this.renderCars();
  }
  createView() {
    this.main.createView(this.garage.getElement());
    const footer = new FooterView();
    document.body.append(this.header.getElement(), this.main.getElement(), footer.getElement());
  }

  async renderCars() {
    this.garage.container.innerHTML = '';
    this.car.getCars(this.garage.container);
  }

  async createButtonHandler() {
    this.garage.createButton.addEventListener('click', async (e) => {
      e.preventDefault();
      await this.car.renderCar(
        this.garage.createTextInput.getElement().value,
        this.garage.createColorInput.value,
        this.garage.container
      );
    });
  }

  async deleteButtonHandler() {
    this.garage.container.addEventListener('click', async (e) => {
      const targetElement = e.target as HTMLElement;
      const dataAttr = Number(targetElement.dataset.id);
      await this.car.deleteCar(dataAttr);
      await this.renderCars();
    });
  }
}
