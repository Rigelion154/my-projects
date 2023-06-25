import { LeftView } from './components/left/leftView';
import { RightView } from './components/right/RightView';
import ComponentCreator from './utils/ComponentCreator';
import { data } from './data/data';
import { ButtonHandler } from './utils/ButtonHandler';
import { InputHandler } from './utils/InputHandler';
import { LocalStorageManager } from './utils/LocalStorageManager';

class App {
    leftView: LeftView;
    rightView: RightView;
    index: number;
    buttonHandler: ButtonHandler;
    inputHandler: InputHandler;
    localStorageManager: LocalStorageManager;
    constructor() {
        this.index = 0;
        this.leftView = new LeftView(data, this.index);
        this.rightView = new RightView(data, this.index);
        this.buttonHandler = new ButtonHandler(this, this.rightView.header);
        this.inputHandler = new InputHandler(this.leftView.editor.editorLeft, this.leftView.editor.editorRight, this);
        this.localStorageManager = new LocalStorageManager();
        this.initialize();
        console.log(this.index);
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
        this.localStorageManager.saveIndex(this.index);
        this.localStorageManager.saveProgress(Array.from(this.rightView.levels.getNode().children));
        this.setTextContent(this.index);
    }

    initialize() {
        const storedIndex = this.localStorageManager.getIndex();
        if (storedIndex !== null) this.index = storedIndex;
        this.setTextContent(this.index);
        this.localStorageManager.getProgress(Array.from(this.rightView.levels.getNode().children));
    }
}

export { App };
