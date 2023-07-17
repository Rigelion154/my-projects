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
    const container = new ComponentCreator('modal__container').getElement();
    const image = new ComponentCreator('modal__image').getElement();
    container.append(image, this.modalContent);
    this.setCallback(this.closeModal.bind(this));
    this.element.append(container);
  }

  setContent(name: string, time: number) {
    this.modalContent.innerHTML = `<strong>${name}</strong> win with time <strong>${time}</strong> second!`;
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
