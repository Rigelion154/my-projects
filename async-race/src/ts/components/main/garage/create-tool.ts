import ComponentCreator from '../../../utils/component-creator';
import InputComponentCreator from '../../../utils/input-component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';

const cssClasses = {
  FORM: 'garage__form',
  INPUT: 'garage__input',
  COLOR: 'garage__color',
  BTN_CREATE: 'garage__button-create button',
};

const textContent = {
  CREATE_HOLDER: 'Create new car',
  BTN_CREATE: 'Create',
};
export default class CreateTool extends ComponentCreator {
  createTextInput: InputComponentCreator;
  createColorInput: HTMLInputElement;
  createButton: ButtonComponentCreator;
  constructor() {
    super(cssClasses.FORM);
    this.createTextInput = new InputComponentCreator(cssClasses.INPUT, 'text', textContent.CREATE_HOLDER);
    this.createTextInput.setCallback(this.inputHandler.bind(this));
    this.createColorInput = new InputComponentCreator(cssClasses.COLOR, 'color', '', '#A600A6').getElement();
    this.createButton = new ButtonComponentCreator(cssClasses.BTN_CREATE, textContent.BTN_CREATE);
    this.createButton.getElement().disabled = true;
  }

  inputHandler() {
    this.createButton.getElement().disabled = this.createTextInput.getElement().value.trim() === '';
  }

  getElement(): HTMLElement {
    const container = this.element;
    container.append(this.createTextInput.getElement(), this.createColorInput, this.createButton.getElement());
    return container;
  }
}
