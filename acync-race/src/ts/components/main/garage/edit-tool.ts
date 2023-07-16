import ComponentCreator from '../../../utils/component-creator';
import InputComponentCreator from '../../../utils/input-component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';

const cssClasses = {
  FORM: 'garage__form',
  INPUT: 'garage__input',
  COLOR: 'garage__color',
  BTN_CREATE: 'garage__button-create button',
  BTN_EDIT: 'garage__button-edit button',
};

const textContent = {
  EDIT_HOLDER: 'Edit car',
  BTN_EDIT: 'Edit',
};

export default class EditTool extends ComponentCreator {
  editTextInput: InputComponentCreator;
  editColorInput: HTMLInputElement;
  editButton: HTMLButtonElement;
  constructor() {
    super(cssClasses.FORM);
    this.editTextInput = new InputComponentCreator(cssClasses.INPUT, 'text', textContent.EDIT_HOLDER);
    this.editTextInput.getElement().disabled = true;
    this.editColorInput = new InputComponentCreator(cssClasses.COLOR, 'color', '', '#A600A6').getElement();
    this.editButton = new ButtonComponentCreator(cssClasses.BTN_CREATE, textContent.BTN_EDIT).getElement();
    this.editButton.disabled = true;
  }

  editHandler() {
    this.editButton.disabled = this.editTextInput.getElement().value.trim() === '';
  }

  getElement(): HTMLElement {
    const container = this.element;
    container.append(this.editTextInput.getElement(), this.editColorInput, this.editButton);
    return container;
  }

  editSelectHandler(name: string, color: string) {
    this.editTextInput.getElement().value = name;
    this.editTextInput.getElement().disabled = false;
    this.editColorInput.value = color;
    this.editHandler();
  }
}
