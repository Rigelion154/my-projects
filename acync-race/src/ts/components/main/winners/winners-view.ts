import ComponentCreator from '../../../utils/component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';
import Storage from '../../../utils/storage';
import getCarImage from '../../../utils/get-car-image';

type WinResponse = {
  id: number;
  wins: number;
  time: number;
};

type CarResponse = {
  name: string;
  color: string;
  id: number;
};

const cssClasses = {
  WINNERS: 'winners winners__container',
  TITLE: 'winners__title',
  SUBTITLE: 'winners__subtitle',
  CARS: 'winners__cars',
  BTN_PREV: 'winners__button-prev button',
  BTN_NEXT: 'winners__button-next button',
};

const textContent = {
  BTN_PREV: 'Previous',
  BTN_NEXT: 'Next',
};

export default class WinnersView extends ComponentCreator {
  url = 'http://127.0.0.1:3000';
  path = {
    garage: '/garage',
    winners: '/winners',
  };
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  carContainer: HTMLElement;
  title: HTMLElement;
  pagesCount: HTMLElement;
  constructor() {
    super(cssClasses.WINNERS, 'section');
    this.title = new ComponentCreator(cssClasses.TITLE, 'h2').getElement();
    this.pagesCount = new ComponentCreator(cssClasses.SUBTITLE, 'h4').getElement();
    this.carContainer = new ComponentCreator(cssClasses.CARS).getElement();
    this.carContainer.setAttribute('start', '1');
    this.prevButton = new ButtonComponentCreator(cssClasses.BTN_PREV, textContent.BTN_PREV).getElement();
    this.nextButton = new ButtonComponentCreator(cssClasses.BTN_NEXT, textContent.BTN_NEXT).getElement();

    this.setButtonsStatus().then(() => this.setCreateTools());
    this.renderWinners();
  }

  setCreateTools() {
    const buttons = new ComponentCreator('winners__buttons');
    buttons.getElement().append(this.prevButton, this.nextButton);
    this.element.append(this.title, this.pagesCount, this.carContainer, buttons.getElement());
  }

  async setButtonsStatus() {
    this.nextButton.disabled = Storage.currentWinnersPage === (await Storage.getWinnersMaxPages());
    this.prevButton.disabled = Storage.currentWinnersPage === 1;
  }

  async getCarById(id: number) {
    const garage = await fetch(`${this.url}${this.path.garage}/${id}`, {
      method: 'GET',
    });
    const car: CarResponse = await garage.json();
    return car;
  }

  async renderWinners() {
    const winners = await fetch(
      `${this.url}${this.path.winners}?_page=${Storage.currentWinnersPage}&_limit=${Storage.maxWinnersPageItem}`
    );
    const winnerCars: WinResponse[] = await winners.json();
    const totalCars = winners.headers.get('X-Total-Count');
    this.title.textContent = `Winners (${totalCars})`;
    this.pagesCount.textContent = `Page #${Storage.currentWinnersPage}`;
    this.carContainer.innerHTML = '';
    winnerCars.forEach(async (car, index) => {
      const garageCar = await this.getCarById(car.id);
      const winnersList = new ComponentCreator('winner__list').getElement();
      const winnerImage = new ComponentCreator('winner__image').getElement();
      const winnerName = new ComponentCreator('winner__name').getElement();
      const winnerCount = new ComponentCreator('winner__count').getElement();
      const winnerTime = new ComponentCreator('winner__time').getElement();
      const winItem = new ComponentCreator('winners__item').getElement();
      winnersList.textContent = `${index + 1}`;
      winnerImage.innerHTML = getCarImage(garageCar.color);
      winnerName.textContent = garageCar.name;
      winnerCount.textContent = `${car.wins}`;
      winnerTime.textContent = `${car.time}`;
      winItem.append(winnersList, winnerImage, winnerName, winnerCount, winnerTime);
      this.carContainer.append(winItem);
    });
  }
}
