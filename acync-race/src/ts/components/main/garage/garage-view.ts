import ComponentCreator from '../../../utils/component-creator';
import InputComponentCreator from '../../../utils/input-component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';

const cssClasses = {
  GARAGE: 'garage',
  CONTAINER: 'container garage__container',
  CARS: 'cars',
  TOOLBAR: 'garage__toolbar',
  EDITOR: 'garage__editor',
  FORM: 'garage__form',
  INPUT: 'garage__input',
  COLOR: 'garage__color',
  BTN_CREATE: 'garage__button-create button',
  BTN_EDIT: 'garage__button-edit button',
};

const textContent = {
  CREATE_HOLDER: 'Create new car',
  EDIT_HOLDER: 'Edit car',
  BTN_CREATE: 'Create',
  BTN_EDIT: 'Edit',
};

export default class GarageView extends ComponentCreator {
  createTextInput: InputComponentCreator;
  createColorInput: HTMLInputElement;
  createButton: HTMLButtonElement;
  container: HTMLElement;
  constructor() {
    super(cssClasses.GARAGE, 'section');
    this.createTextInput = new InputComponentCreator(cssClasses.INPUT, 'text', textContent.CREATE_HOLDER);
    this.createTextInput.setCallback(this.inputHandler.bind(this));
    this.createColorInput = new InputComponentCreator(cssClasses.COLOR, 'color', '', '#A600A6').getElement();
    this.createButton = new ButtonComponentCreator(cssClasses.BTN_CREATE, textContent.BTN_CREATE).getElement();
    this.createButton.disabled = true;
    this.container = new ComponentCreator(cssClasses.CARS).getElement();
    this.setCreateTools();
  }

  setCreateTools() {
    const container = new ComponentCreator(cssClasses.CONTAINER).getElement();
    const editor = new ComponentCreator(cssClasses.EDITOR);
    const editContainer = new ComponentCreator(cssClasses.FORM);
    editContainer.getElement().append(this.createTextInput.getElement(), this.createColorInput, this.createButton);
    editor.addInnerElement(editContainer.getElement());
    container.append(editor.getElement());
    this.element.append(container, this.container);
  }

  inputHandler() {
    this.createButton.disabled = this.createTextInput.getElement().value.trim() === '';
  }
}
