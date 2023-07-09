import ComponentCreator from '../../../utils/component-creator';
import getCarImage from '../../../utils/get-car-image';

const cssClasses = {
  GARAGE: 'garage',
  CONTAINER: 'container garage__container',
};

export default class GarageView extends ComponentCreator {
  constructor() {
    super(cssClasses.GARAGE, 'section');
    this.createView();
  }

  createView() {
    const container = new ComponentCreator(cssClasses.CONTAINER);
    const car = new ComponentCreator('car');
    car.getElement().innerHTML = getCarImage('black');
    this.element.append(container.getElement(), car.getElement());
  }
}
