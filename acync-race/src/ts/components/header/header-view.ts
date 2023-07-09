import ComponentCreator from '../../utils/component-creator';
import HeaderButtons from './header-buttons';

const cssClasses = {
  HEADER: 'header',
  NAV: 'nav',
  LOGO: 'logo',
  CONTAINER: 'container header__container',
};

const textContent = {
  LOGO: 'Async Race',
  GARAGE_BTN: 'Garage',
  WINNERS_BTN: 'Winners',
};

export default class HeaderView extends ComponentCreator {
  constructor() {
    super(cssClasses.HEADER);
    this.createView();
  }

  createView() {
    const container = new ComponentCreator(cssClasses.CONTAINER);
    const logo = new ComponentCreator(cssClasses.LOGO, 'h1');
    logo.setTextContent(textContent.LOGO);

    const nav = new ComponentCreator(cssClasses.NAV);

    const pages = [
      {
        name: textContent.GARAGE_BTN,
        // eslint-disable-next-line no-console
        callback: () => console.log('+'),
      },
      {
        name: textContent.WINNERS_BTN,
        // eslint-disable-next-line no-console
        callback: () => console.log('-'),
      },
    ];

    pages.forEach((el) => {
      const headerButton = new HeaderButtons();
      headerButton.setTextContent(el.name);
      headerButton.setCallback(el.callback);
      nav.addInnerElement(headerButton.getElement());
    });

    container.getElement().append(nav.getElement(), logo.getElement());
    this.element.append(container.getElement());
  }
}
