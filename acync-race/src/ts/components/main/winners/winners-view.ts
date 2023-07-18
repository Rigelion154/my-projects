import ComponentCreator from '../../../utils/component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';
import Storage from '../../../utils/storage';
import getCarImage from '../../../utils/get-car-image';
import { getCarById, sortWinners } from '../../../utils/api';

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
  listItem: HTMLElement;
  title: HTMLElement;
  pagesCount: HTMLElement;
  sort: string;
  order: string;
  bestTimeOrder: string;
  winsOrder: string;
  constructor() {
    super(cssClasses.WINNERS, 'section');
    this.title = new ComponentCreator(cssClasses.TITLE, 'h2').getElement();
    this.pagesCount = new ComponentCreator(cssClasses.SUBTITLE, 'h4').getElement();
    this.carContainer = new ComponentCreator(cssClasses.CARS).getElement();
    this.listItem = new ComponentCreator('winner__list-item').getElement();
    this.carContainer.setAttribute('start', '1');
    this.prevButton = new ButtonComponentCreator(cssClasses.BTN_PREV, textContent.BTN_PREV).getElement();
    this.nextButton = new ButtonComponentCreator(cssClasses.BTN_NEXT, textContent.BTN_NEXT).getElement();
    this.bestTimeOrder = 'ASC';
    this.winsOrder = 'DESC';
    this.sort = '';
    this.order = '';
    this.setButtonsStatus().then(() => this.setCreateTools());
    this.renderWinners(this.sort, this.order);
  }

  setCreateTools() {
    const buttons = new ComponentCreator('winners__buttons');
    buttons.getElement().append(this.prevButton, this.nextButton);
    this.element.append(this.title, this.pagesCount, this.renderWinnersTable(), buttons.getElement());
  }

  async setButtonsStatus() {
    this.nextButton.disabled = Storage.currentWinnersPage === (await Storage.getWinnersMaxPages());
    this.prevButton.disabled = Storage.currentWinnersPage === 1;
  }
  renderWinnersTable() {
    const winnersTable = new ComponentCreator('winners__table').getElement();
    const header = new ComponentCreator('winners__table-header').getElement();
    const number = new ComponentCreator('winners__table-number').getElement();
    number.textContent = 'Number';
    const car = new ComponentCreator('winners__table-car').getElement();
    car.textContent = 'Car';
    const name = new ComponentCreator('winners__table-name').getElement();
    name.textContent = 'Name';
    const wins = new ComponentCreator('winners__table-wins').getElement();
    wins.textContent = 'Wins';
    const bestTime = new ComponentCreator('winners__table-time').getElement();
    bestTime.innerHTML = `Best <br> Time(seconds)`;

    bestTime.addEventListener('click', async () => {
      this.sort = 'time';
      this.order = this.bestTimeOrder;
      wins.className = 'winners__table-wins';
      bestTime.className = `winners__table-time ${this.order}__time`;
      this.bestTimeOrder = this.bestTimeOrder === 'ASC' ? 'DESC' : 'ASC';
      this.winsOrder = 'DESC';
      await this.renderWinners(this.sort, this.order);
    });

    wins.addEventListener('click', async () => {
      this.sort = 'wins';
      this.order = this.winsOrder;
      bestTime.className = 'winners__table-time';
      wins.className = `winners__table-wins ${this.order}__wins`;
      this.winsOrder = this.winsOrder === 'ASC' ? 'DESC' : 'ASC';
      this.bestTimeOrder = 'ASC';
      await this.renderWinners(this.sort, this.order);
    });

    header.append(number, car, name, wins, bestTime);
    winnersTable.append(header, this.carContainer);
    return winnersTable;
  }

  async renderWinners(sort: string, order: string) {
    const { winners, totalWinners } = await sortWinners(sort, order);
    this.title.textContent = `Winners (${totalWinners})`;
    this.pagesCount.textContent = `Page #${Storage.currentWinnersPage}`;
    this.carContainer.innerHTML = '';
    await Promise.all(
      winners.map(async (car, index) => {
        const garageCar = await getCarById(car.id);
        const winnerNumber = new ComponentCreator('winner__list').getElement();
        const winnerImage = new ComponentCreator('car__image').getElement();
        const winnerName = new ComponentCreator('winner__name').getElement();
        const winnerCount = new ComponentCreator('winner__count').getElement();
        const winnerTime = new ComponentCreator('winner__time').getElement();
        const winItem = new ComponentCreator('winners__item').getElement();

        winnerNumber.textContent = `${index + 1}`;
        winnerImage.innerHTML = getCarImage(garageCar.color);
        winnerName.textContent = garageCar.name;
        winnerCount.textContent = `${car.wins}`;
        winnerTime.textContent = `${car.time}`;
        winItem.append(winnerNumber, winnerImage, winnerName, winnerCount, winnerTime);
        this.carContainer.append(winItem);
      })
    );
  }
}
