import { ComponentOptions } from '../types';

export default class ComponentCreator {
    node: HTMLElement;
    // options = { tagName: 'div', classNames: [], textContent: '', parentNode: undefined };
    // options: ComponentOptions;
    constructor({ tagName = 'div', classNames = [], textContent = '', parentNode = undefined }: ComponentOptions) {
        this.node = document.createElement(tagName);
        this.node.classList.add(...classNames);
        this.node.textContent = textContent;
        if (parentNode) {
            parentNode.append(this.node);
        }
    }

    append(child: ComponentCreator) {
        this.node.append(child.getNode());
    }

    appendChildren(children: ComponentCreator[]) {
        children.forEach((el) => {
            this.append(el);
        });
    }

    getNode(): HTMLElement {
        return this.node;
    }

    addClass(className: string) {
        this.node.classList.add(className);
    }

    addTextContent(text: string) {
        this.node.textContent = text;
    }

    addCallBack(callback: () => void): void {
        this.node.addEventListener('click', callback);
    }

    destroy() {
        this.node.remove();
    }
}
