import ComponentCreator from '../utils/ComponentCreator';
import RightHeaderView from './right-header/RightHeaderView';
import { DataItem } from '../../types';
import RightMainView from './right-main/RightMainView';

class RightView extends ComponentCreator {
    header: RightHeaderView;
    main: RightMainView;
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
        this.configureView();
    }
    configureView() {
        this.appendChildren([this.header, this.main]);
    }
}

export { RightView };
