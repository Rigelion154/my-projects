import { LeftView } from './left/leftView';
import { RightView } from './right/RightView';
import ComponentCreator from '../utils/ComponentCreator';
import { data } from '../data/data';
import { compareAnswer } from '../utils/setHoverHtmlMarkup';

class App {
    leftView: LeftView;
    rightView: RightView;
    index: number;
    answers: ComponentCreator;
    constructor() {
        this.index = 0;
        this.leftView = new LeftView(data, this.index);
        this.rightView = new RightView(data, this.index);
        this.answers = new ComponentCreator({
            classNames: ['answers'],
        });
        this.answers.getNode().innerHTML = data[this.index].selector;
        this.setListeners();
    }

    createView() {
        const container = new ComponentCreator({
            classNames: ['container'],
            parentNode: document.body,
        });
        container.appendChildren([this.leftView, this.rightView]);
        console.log(Array.from(this.answers.getNode().childNodes));
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
        const input = this.leftView.editor.editorLeft.input.getNode() as HTMLInputElement;
        const tags = this.leftView.editor.editorRight.mainTags.getNode() as HTMLElement;

        input.addEventListener('keyup', (event) => {
            if (event.code === 'Enter') {
                console.log(Array.from(this.answers.getNode().childNodes));
                console.log(Array.from(tags.querySelectorAll(input.value)));
                if (
                    compareAnswer(
                        Array.from(this.answers.getNode().childNodes),
                        Array.from(tags.querySelectorAll(input.value))
                    )
                ) {
                    this.index++;
                    this.setTextContent();
                }
            }
        });
    }

    setTextContent() {
        this.leftView.setTextContent(data, this.index);
        this.rightView.setTextContent(data, this.index);
        this.answers.getNode().innerHTML = data[this.index].selector;
    }
}

export { App };
