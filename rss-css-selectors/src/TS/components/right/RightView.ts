import ComponentCreator from '../../utils/ComponentCreator';
import RightHeaderView from './right-header/RightHeaderView';
import { DataItem } from '../../types';
import RightMainView from './right-main/RightMainView';

class RightView extends ComponentCreator {
    header: RightHeaderView;
    main: RightMainView;
    levels: ComponentCreator;

    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'section',
            classNames: ['right-side'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.header = new RightHeaderView(data, index);
        this.main = new RightMainView(data, index);
        this.levels = new ComponentCreator({
            tagName: 'ul',
            classNames: ['right__levels'],
        });
        this.configureView(data);
        this.setTextContent(data, index);
    }

    configureView(data: DataItem[]) {
        data.forEach((el) => {
            const level = new ComponentCreator({
                tagName: 'li',
                classNames: ['right__level'],
                parentNode: this.levels.getNode(),
            });
            level.getNode().textContent = `${el.id} Level`;
        });
        this.appendChildren([this.header, this.main, this.levels]);
    }

    setTextContent(data: DataItem[], index: number) {
        this.main.setTextContent(data, index);
        this.header.setTextContent(data, index);
        Array.from(this.levels.getNode().children).forEach((level, i) => {
            level.classList.toggle('active', i === index);
        });
    }
}
export { RightView };
