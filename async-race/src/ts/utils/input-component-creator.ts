import ComponentCreator from './component-creator';

export default class InputComponentCreator extends ComponentCreator {
  input: HTMLInputElement;

  constructor(className: string, type: string, placeholder?: string, value?: string) {
    super(className, 'input');
    this.input = this.element as HTMLInputElement;
    this.input.type = type;
    if (placeholder) this.input.placeholder = placeholder;
    if (value) this.input.value = value;
  }

  getElement() {
    return this.input;
  }

  setCallback(callback: Function | null) {
    if (typeof callback === 'function') {
      this.input.addEventListener('input', (event) => callback(event));
    }
  }
}
