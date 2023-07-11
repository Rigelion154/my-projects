import ComponentCreator from '../../utils/component-creator';

const cssClasses = {
  MAIN: 'main',
  CONTAINER: 'container main__container',
};

export default class MainView extends ComponentCreator {
  container: ComponentCreator;
  constructor() {
    super(cssClasses.MAIN, 'main');
    this.container = new ComponentCreator(cssClasses.CONTAINER);
    this.element.append(this.container.getElement());
  }

  createView(content: HTMLElement) {
    this.container.addInnerElement(content);
  }
}
