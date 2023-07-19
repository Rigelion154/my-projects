import ComponentCreator from './component-creator';

export default class ButtonComponentCreator extends ComponentCreator {
  button: HTMLButtonElement;

  constructor(className: string, text: string, type?: string) {
    super(className, 'button');
    this.button = this.element as HTMLButtonElement;
    this.button.textContent = text;
    if (type) this.button.type = type;
  }

  getElement() {
    return this.button;
  }

  setCallback(callback: Function | null) {
    if (typeof callback === 'function') {
      this.button.addEventListener('click', (event) => callback(event));
    }
  }
}
