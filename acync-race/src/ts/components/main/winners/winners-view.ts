import ComponentCreator from '../../../utils/component-creator';
import ButtonComponentCreator from '../../../utils/button-component-creator';

const cssClasses = {
  WINNERS: 'winners winners__container',
  TITLE: 'garage__title',
  CONTAINER: 'garage__container',
  CARS: 'cars',
  BTN_CREATE: 'garage__button-create button',
  BTN_EDIT: 'garage__button-edit button',
  BTN_PREV: 'garage__button-prev button',
  BTN_NEXT: 'garage__button-next button',
};

const textContent = {
  CREATE_HOLDER: 'Create new car',
  EDIT_HOLDER: 'Edit car',
  BTN_CREATE: 'Create',
  BTN_EDIT: 'Edit',
  BTN_PREV: 'Previous',
  BTN_NEXT: 'Next',
};

export default class WinnersView extends ComponentCreator {
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  container: HTMLElement;
  static pagesCount: HTMLElement;
  static title: HTMLElement;
  constructor() {
    super(cssClasses.WINNERS, 'section');
    this.prevButton = new ButtonComponentCreator(cssClasses.BTN_PREV, textContent.BTN_PREV).getElement();
    this.nextButton = new ButtonComponentCreator(cssClasses.BTN_NEXT, textContent.BTN_NEXT).getElement();
    this.container = new ComponentCreator(cssClasses.CARS).getElement();
    WinnersView.pagesCount = new ComponentCreator(cssClasses.TITLE, 'h4').getElement();
    WinnersView.title = new ComponentCreator(cssClasses.TITLE, 'h2').getElement();
    // this.setCreateTools();
  }

  // setCreateTools() {
  //   const editor = new ComponentCreator(cssClasses.EDITOR);
  //   const createContainer = new ComponentCreator(cssClasses.FORM);
  //   const editContainer = new ComponentCreator(cssClasses.FORM);
  //   const buttons = new ComponentCreator('garage__buttons');
  //   buttons.getElement().append(GarageView.prevButton, GarageView.nextButton);
  //   createContainer.getElement().append(this.createTextInput.getElement(), this.createColorInput, this.createButton);
  //   editContainer
  //     .getElement()
  //     .append(GarageView.editTextInput.getElement(), GarageView.editColorInput, GarageView.editButton);
  //   editor.getElement().append(createContainer.getElement(), editContainer.getElement());
  //   this.element.append(
  //     editor.getElement(),
  //     GarageView.title,
  //     GarageView.pagesCount,
  //     GarageView.container,
  //     buttons.getElement()
  //   );
  // }
  //
  // inputHandler() {
  //   this.createButton.disabled = this.createTextInput.getElement().value.trim() === '';
  // }
  // static editHandler() {
  //   GarageView.editButton.disabled = GarageView.editTextInput.getElement().value.trim() === '';
  // }
}
