export default class ComponentCreator {
  protected element: HTMLElement;

  constructor(className: string, tagName: string = 'div') {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  setTextContent(text: string) {
    this.element.textContent = text;
  }

  addInnerElement(element: HTMLElement) {
    this.element.append(element);
  }

  getElement() {
    return this.element;
  }

  setCallback(callback: Function | null) {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', (event) => callback(event));
    }
  }
}
