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
import WinnersView from './main/winners/winners-view';
import { createCar, editCar } from '../utils/api';
import getHundredCars from '../utils/getHundredCars';

export default class App {
  header: HeaderView;
  main: MainView;
  garage: GarageView;
  winners: WinnersView;
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
    this.winners = new WinnersView();
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
    this.headerHandler();
    this.generateButtonHandler();
    this.car.renderCars();
  }

  headerHandler() {
    this.header.garageButton.setCallback(() => {
      this.garage.getElement().style.display = 'flex';
      this.winners.getElement().style.display = 'none';
    });
    this.header.winnersButton.setCallback(async () => {
      this.garage.getElement().style.display = 'none';
      this.winners.getElement().style.display = 'flex';
      await this.winners.setButtonsStatus();
      await this.winners.renderWinners(this.winners.sort, this.winners.order);
    });
  }

  renderGarage() {
    const container = this.garage.toolBar;
    container.append(this.createTool.getElement(), this.editTool.getElement());
    return container;
  }

  async createView() {
    this.renderGarage();
    this.main.container.getElement().append(this.garage.getElement(), this.winners.getElement());
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
    this.winners.nextButton.addEventListener('click', async () => {
      await this.pagination.nextWinnersButtonHandler(this.car, this.winners);
    });
    this.winners.prevButton.addEventListener('click', async () => {
      await this.pagination.prevWinnersButtonHandler(this.car, this.winners);
    });
  }

  async createButtonHandler() {
    await createCar(this.createTool.createTextInput.getElement().value, this.createTool.createColorInput.value);
    await this.garage.setButtonsStatus();
    await this.car.renderCars();
    this.createTool.createTextInput.getElement().value = '';
    this.createTool.inputHandler();
  }

  async editButtonHandler() {
    const editInput = this.editTool.editTextInput.getElement();
    const editContent = editInput.value === '' ? (editInput.value = 'Default Car') : editInput.value;
    await editCar(editContent, this.editTool.editColorInput.value, Storage.editCarId);
    await this.car.renderCars();
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
      this.car.cars.forEach((car) => car.setWinners(this.modal));
      this.raceButtonsDisable();
      this.car.cars.forEach((car) => {
        car.raceButtonsDisable();
      });
    });
  }

  raceResetHandler() {
    this.garage.resetButton.addEventListener('click', async () => {
      await Promise.all(
        this.car.cars.map(async (car) => {
          Storage.isAnimationEnd = true;
          await car.stopEngine();
          car.raceButtonsEnable();
        })
      );
      this.raceButtonsEnable();
      Storage.isAnimationEnd = false;
    });
  }

  generateButtonHandler() {
    this.garage.generateButton.setCallback(async () => {
      await getHundredCars();
      await this.car.renderCars();
      await this.garage.setButtonsStatus();
    });
  }

  raceButtonsDisable() {
    this.header.garageButton.getElement().disabled = true;
    this.header.winnersButton.getElement().disabled = true;
    this.createTool.createButton.getElement().disabled = true;
    this.createTool.createTextInput.getElement().disabled = true;
    this.garage.generateButton.getElement().disabled = true;
    this.editTool.editButton.disabled = true;
    this.garage.raceButton.disabled = true;
    this.garage.nextButton.disabled = true;
    this.garage.prevButton.disabled = true;
  }

  raceButtonsEnable() {
    this.header.garageButton.getElement().disabled = false;
    this.header.winnersButton.getElement().disabled = false;
    this.createTool.createButton.getElement().disabled = false;
    this.createTool.createTextInput.getElement().disabled = false;
    this.garage.generateButton.getElement().disabled = false;
    this.editTool.editButton.disabled = false;
    this.garage.raceButton.disabled = false;
    this.garage.nextButton.disabled = false;
    this.garage.prevButton.disabled = false;
  }
}
