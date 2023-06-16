import { LeftView } from './left/leftView';
import { RightView } from './right/RightView';
import ComponentCreator from './utils/ComponentCreator';
import { data } from '../data/data';

class App {
    leftView: LeftView;
    rightView: RightView;
    index: number;

    constructor() {
        this.index = 0;
        this.leftView = new LeftView(data, this.index);
        this.rightView = new RightView(data, this.index);
        // this.createView();
        this.setListeners();
    }

    createView() {
        const container = new ComponentCreator({
            tagName: 'div',
            classNames: ['container'],
            parentNode: document.body,
            textContent: '',
        });

        container.appendChildren([this.leftView, this.rightView]);
    }

    setListeners() {
        const nextButton = this.rightView.header.nextButton;
        nextButton.addCallBack(() => {
            this.index += 1;
            if (this.index === data.length) this.index = data.length - 1;
            this.setTextContent();
        });
        const prevButton = this.rightView.header.prevButton;
        prevButton.addCallBack(() => {
            this.index -= 1;
            if (this.index < 1) this.index = 0;
            this.setTextContent();
        });
    }

    setTextContent() {
        this.rightView.header.setTextContent(data, this.index);
        this.rightView.main.setTextContent(data, this.index);
        this.leftView.title.addTextContent(data[this.index].doThis);
    }
}

export { App };
