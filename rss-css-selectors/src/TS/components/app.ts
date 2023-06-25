import { LeftView } from './left/leftView';
import { RightView } from './right/RightView';
import ComponentCreator from '../utils/ComponentCreator';
import { data } from '../data/data';
import { ButtonHandler } from '../utils/ButtonHandler';
import { InputHandler } from '../utils/InputHandler';

class App {
    leftView: LeftView;
    rightView: RightView;
    index: number;
    buttonHandler: ButtonHandler;
    inputHandler: InputHandler;
    constructor() {
        this.index = 0;
        this.leftView = new LeftView(data, this.index);
        this.rightView = new RightView(data, this.index);
        this.buttonHandler = new ButtonHandler(this, this.rightView.header);
        this.inputHandler = new InputHandler(this.leftView.editor.editorLeft, this.leftView.editor.editorRight, this);
    }

    createView() {
        const container = new ComponentCreator({
            classNames: ['container'],
            parentNode: document.body,
        });
        container.appendChildren([this.leftView, this.rightView]);
    }
    setTextContent(index: number) {
        this.leftView.setTextContent(data, index);
        this.rightView.setTextContent(data, index);
    }
    updateIndex(newIndex: number) {
        this.index = newIndex;
        this.setTextContent(this.index);
    }
}

export { App };
