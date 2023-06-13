import { ComponentOptions } from '../../types';

class BaseComponent {
    private node: HTMLElement;

    constructor({ tagName = 'div', classNames = [], textContent = '', parentNode }: ComponentOptions) {
        this.node = document.createElement(tagName);
        this.node.classList.add(...classNames);
        this.node.textContent = textContent;
        if (parentNode) {
            parentNode.append(this.node);
        }
    }

    append(child: BaseComponent) {
        this.node.append(child.getNode());
    }

    appendChildren(children: BaseComponent[]) {
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

    destroy() {
        this.node.remove();
    }
}

export { BaseComponent };
