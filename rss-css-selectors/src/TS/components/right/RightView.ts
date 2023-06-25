import ComponentCreator from '../../utils/ComponentCreator';
import RightHeaderView from './right-header/RightHeaderView';
import { DataItem } from '../../types';
import RightMainView from './right-main/RightMainView';

class RightView extends ComponentCreator {
    header: RightHeaderView;
    main: RightMainView;
    levels: ComponentCreator;
    resetButton: ComponentCreator;
    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'section',
            classNames: ['right-side'],
        };
        super(options);
        this.header = new RightHeaderView(data, index);
        this.main = new RightMainView(data, index);
        this.levels = new ComponentCreator({
            tagName: 'ul',
            classNames: ['right__levels'],
        });
        this.resetButton = new ComponentCreator({
            tagName: 'button',
            textContent: 'Reset Progress',
            classNames: ['button', 'right__reset'],
        });
        this.configureView(data);
        this.setTextContent(data, index);
    }

    configureView(data: DataItem[]) {
        data.forEach((el) => {
            const level = new ComponentCreator({
                tagName: 'li',
                classNames: ['right__level'],
                textContent: `${el.id} Level`,
                parentNode: this.levels.getNode(),
            });
            const isComplete = new ComponentCreator({
                tagName: 'span',
                classNames: ['right__complete'],
            });
            isComplete.getNode().innerHTML = '&#10004;';
            level.getNode().dataset.complete = 'false';
            level.getNode().insertAdjacentElement('afterbegin', isComplete.getNode());
            this.levels.appendChildren([level]);
        });
        this.appendChildren([this.header, this.main, this.levels, this.resetButton]);
    }

    setTextContent(data: DataItem[], index: number) {
        this.main.setTextContent(data, index);
        this.header.setTextContent(data, index);
        Array.from(this.levels.getNode().children).forEach((level, i) => {
            level.classList.toggle('active', i === index);
        });
    }

    checkLevel(index: number) {
        Array.from(this.levels.getNode().children).forEach((level, i) => {
            if (index === i) (level as HTMLElement).dataset.complete = 'true';
        });
    }
}
export { RightView };
