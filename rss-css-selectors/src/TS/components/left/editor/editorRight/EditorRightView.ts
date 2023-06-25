import ComponentCreator from '../../../../utils/ComponentCreator';
import { DataItem } from '../../../../types';

export default class EditorRightView extends ComponentCreator {
    mainTags: ComponentCreator;
    constructor() {
        const options = {
            tagName: 'section',
            classNames: ['editor__right'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.mainTags = this.mainTags = new ComponentCreator({
            classNames: ['editor__right-tags'],
        });
        this.configureView();
    }
    configureView() {
        const header = new ComponentCreator({
            classNames: ['editor__right-header'],
            parentNode: this.getNode(),
        });
        header.getNode().innerHTML = `<span>HTML Viewer</span><span>index.html</span>`;

        const main = new ComponentCreator({
            classNames: ['editor__right-main'],
            parentNode: this.getNode(),
        });

        const numbers = new ComponentCreator({
            classNames: ['editor__right-numbers'],
        });
        for (let i = 1; i <= 15; i += 1) {
            numbers.getNode().innerHTML += `<span>${i}</span>`;
        }

        main.appendChildren([numbers, this.mainTags]);
    }
    setTextContent(data: DataItem[], index: number) {
        if (this.mainTags) this.mainTags.getNode().innerHTML = data[index].boardMarkup;
    }
}
