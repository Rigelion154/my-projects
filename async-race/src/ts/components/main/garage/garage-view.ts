import ComponentCreator from '../../../utils/component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';
import Storage from '../../../utils/storage';

const cssClasses = {
  GARAGE: 'garage garage__container',
  TOOLBAR: 'garage__toolbar',
  TITLE: 'garage__title',
  SUBTITLE: 'garage__subtitle',
  CARS: 'cars',
  BTN_PREV: 'garage__button-prev button',
  BTN_NEXT: 'garage__button-next button',
  BTN_RACE: 'garage__button-race button',
  BTN_RESET: 'garage__button-reset button',
  BTN_GENERATE: 'garage__button-generate button',
};

const textContent = {
  BTN_PREV: 'Previous',
  BTN_NEXT: 'Next',
  BTN_RACE: 'Race',
  BTN_RESET: 'Reset',
  BTN_GENERATE: 'Generate Cars',
};

export default class GarageView extends ComponentCreator {
  toolBar: HTMLElement;
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  raceButton: HTMLButtonElement;
  generateButton: ButtonComponentCreator;
  resetButton: HTMLButtonElement;
  carContainer: HTMLElement;
  title: HTMLElement;
  pagesCount: HTMLElement;
  constructor() {
    super(cssClasses.GARAGE, 'section');
    this.toolBar = new ComponentCreator(cssClasses.TOOLBAR).getElement();
    this.title = new ComponentCreator(cssClasses.TITLE, 'h2').getElement();
    this.pagesCount = new ComponentCreator(cssClasses.SUBTITLE, 'h4').getElement();
    this.carContainer = new ComponentCreator(cssClasses.CARS).getElement();
    this.prevButton = new ButtonComponentCreator(cssClasses.BTN_PREV, textContent.BTN_PREV).getElement();
    this.nextButton = new ButtonComponentCreator(cssClasses.BTN_NEXT, textContent.BTN_NEXT).getElement();
    this.raceButton = new ButtonComponentCreator(cssClasses.BTN_RACE, textContent.BTN_RACE).getElement();
    this.resetButton = new ButtonComponentCreator(cssClasses.BTN_RESET, textContent.BTN_RESET).getElement();
    this.generateButton = new ButtonComponentCreator(cssClasses.BTN_GENERATE, textContent.BTN_GENERATE);
    this.setButtonsStatus().then(() => this.setCreateTools());
  }

  setCreateTools() {
    const buttons = new ComponentCreator('garage__buttons').getElement();
    const buttonsPagination = new ComponentCreator('garage__buttons-pagination').getElement();
    const buttonsControl = new ComponentCreator('garage__buttons-control').getElement();
    buttonsPagination.append(this.prevButton, this.nextButton);
    buttonsControl.append(this.raceButton, this.resetButton, this.generateButton.getElement());
    buttons.append(buttonsPagination, buttonsControl);
    this.element.append(this.title, this.pagesCount, this.toolBar, this.carContainer, buttons);
  }

  async setButtonsStatus() {
    this.nextButton.disabled = Storage.currentGaragePage === (await Storage.getGarageMaxPages());
    this.prevButton.disabled = Storage.currentGaragePage === 1;
  }
}
