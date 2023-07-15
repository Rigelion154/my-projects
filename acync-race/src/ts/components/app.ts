import HeaderView from './header/header-view';
import MainView from './main/main-view';
import FooterView from './footer/footer-view';
import GarageView from './main/garage/garage-view';
import Car from './car/car';
import Storage from '../utils/storage';
import CreateTool from './main/garage/create-tool';
import EditTool from './main/garage/edit-tool';
import Pagination from '../utils/pagination';
import Modal from './main/winners/winner-modal';

export default class App {
  header: HeaderView;
  main: MainView;
  garage: GarageView;
  createTool: CreateTool;
  editTool: EditTool;
  car: Car;
  pagination: Pagination;
  isWin: boolean;
  modal: Modal;
  constructor() {
    this.header = new HeaderView();
    this.main = new MainView();
    this.garage = new GarageView();
    this.createTool = new CreateTool();
    this.createTool.createButton.setCallback(this.createButtonHandler.bind(this));
    this.editTool = new EditTool();
    this.editTool.editButton.addEventListener('click', this.editButtonHandler.bind(this));
    this.car = new Car(this.editTool, this.garage);
    this.pagination = new Pagination();
    this.isWin = true;
    this.modal = new Modal();
    this.paginationHandler();
    this.raceStartHandler();
    this.raceResetHandler();
    this.car.renderCars();
  }

  renderGarage() {
    const container = this.garage.toolBar;
    container.append(this.createTool.getElement(), this.editTool.getElement());
    return container;
  }

  async createView() {
    this.renderGarage();
    this.main.container.getElement().append(this.garage.getElement());
    const footer = new FooterView();
    document.body.append(
      this.header.getElement(),
      this.main.getElement(),
      footer.getElement(),
      this.modal.getElement()
    );
  }

  paginationHandler() {
    this.garage.nextButton.addEventListener('click', async () => {
      await this.pagination.nextButtonHandler(this.car, this.garage);
    });
    this.garage.prevButton.addEventListener('click', async () => {
      await this.pagination.prevButtonHandler(this.car, this.garage);
    });
  }

  async createButtonHandler() {
    await this.car.createCar(
      this.createTool.createTextInput.getElement().value,
      this.createTool.createColorInput.value
    );
    await this.garage.setButtonsStatus();
    this.createTool.createTextInput.getElement().value = '';
    this.createTool.inputHandler();
  }

  async editButtonHandler() {
    await this.car.editCar(
      this.editTool.editTextInput.getElement().value,
      this.editTool.editColorInput.value,
      Storage.editCarId
    );
    await this.garage.setButtonsStatus();
    this.editTool.editTextInput.getElement().value = '';
    this.editTool.editTextInput.getElement().disabled = true;
    this.editTool.editHandler();
  }

  raceStartHandler() {
    this.garage.raceButton.addEventListener('click', async () => {
      await this.car.renderCars();
      const speeds = await Promise.all(this.car.cars.map((car) => car.startEngine()));
      await this.car.startRace(speeds);
      this.car.cars.forEach((car) => car.getWinners(this.modal));
    });
  }

  raceResetHandler() {
    this.garage.resetButton.addEventListener('click', () => {
      this.car.cars.forEach((car) => car.stopEngine());
      Storage.winner = [];
    });
  }
}
