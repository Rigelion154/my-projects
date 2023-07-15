import ComponentCreator from '../../../utils/component-creator';

const cssClasses = {
  MODAL: 'modal modal__wrapper',
  MODAL_CONTENT: 'modal__content',
};

export default class Modal extends ComponentCreator {
  modalContent: HTMLElement;
  constructor() {
    super(cssClasses.MODAL);
    this.modalContent = new ComponentCreator(cssClasses.MODAL_CONTENT).getElement();
    this.element.append(this.modalContent);
    this.setCallback(this.closeModal.bind(this));
  }

  setContent(name: string, time: number) {
    this.modalContent.textContent = `${name} win with time ${time} second!`;
  }

  openModal() {
    this.getElement().style.display = 'block';
  }

  closeModal() {
    this.getElement().addEventListener('click', (event) => {
      if (event.target === this.getElement()) {
        this.getElement().style.display = 'none';
      }
    });
  }
}
