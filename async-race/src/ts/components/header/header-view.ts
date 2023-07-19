import ComponentCreator from '../../utils/component-creator';
import ButtonComponentCreator from '../../utils/button-component-creator';

const cssClasses = {
  HEADER: 'header',
  NAV: 'nav',
  LOGO: 'logo',
  CONTAINER: 'container header__container',
  GARAGE_BTN: 'button nav__button',
  WINNERS_BTN: 'button nav__button',
};

const textContent = {
  LOGO: 'Async Race',
  GARAGE_BTN: 'Garage',
  WINNERS_BTN: 'Winners',
};

export default class HeaderView extends ComponentCreator {
  garageButton: ButtonComponentCreator;
  winnersButton: ButtonComponentCreator;
  constructor() {
    super(cssClasses.HEADER);
    this.garageButton = new ButtonComponentCreator(cssClasses.GARAGE_BTN, textContent.GARAGE_BTN);
    this.winnersButton = new ButtonComponentCreator(cssClasses.WINNERS_BTN, textContent.WINNERS_BTN);
    this.createView();
  }

  createView() {
    const container = new ComponentCreator(cssClasses.CONTAINER);
    const logo = new ComponentCreator(cssClasses.LOGO, 'h1');
    logo.setTextContent(textContent.LOGO);

    const nav = new ComponentCreator(cssClasses.NAV).getElement();
    nav.append(this.garageButton.getElement(), this.winnersButton.getElement());
    container.getElement().append(nav, logo.getElement());
    this.element.append(container.getElement());
  }
}
