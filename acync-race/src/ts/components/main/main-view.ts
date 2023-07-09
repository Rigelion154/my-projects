import ComponentCreator from '../../utils/component-creator';
import GarageView from './garage/garage-view';

const cssClasses = {
  MAIN: 'main',
  CONTAINER: 'container main__container',
};

export default class MainView extends ComponentCreator {
  static container: ComponentCreator;
  constructor() {
    super(cssClasses.MAIN, 'main');
    MainView.container = new ComponentCreator(cssClasses.CONTAINER);
    this.createView();
  }

  createView() {
    const garage = new GarageView();

    MainView.container.addInnerElement(garage.getElement());
    this.element.append(MainView.container.getElement());
  }
}
