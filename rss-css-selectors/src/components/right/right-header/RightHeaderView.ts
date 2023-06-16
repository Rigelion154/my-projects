import ComponentCreator from '../../utils/ComponentCreator';
import { DataItem } from '../../../types';

export default class RightHeaderView extends ComponentCreator {
    title: ComponentCreator;
    prevButton: ComponentCreator;
    nextButton: ComponentCreator;
    index: number;
    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'div',
            classNames: ['right__header'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.index = index;
        this.title = new ComponentCreator({
            tagName: 'h2',
            classNames: ['right__title'],
            textContent: `Level ${index + 1} of ${data.length}`,
            parentNode: this.getNode(),
        });
        this.prevButton = new ComponentCreator({
            tagName: 'button',
            classNames: ['prev-button'],
            textContent: `<`,
            parentNode: this.getNode(),
        });
        this.nextButton = new ComponentCreator({
            tagName: 'button',
            classNames: ['next-button'],
            textContent: `>`,
            parentNode: this.getNode(),
        });
    }
    setTextContent(data: DataItem[], index: number) {
        this.title.addTextContent(`Level ${index + 1} of ${data.length}`);
    }
}
