import ComponentCreator from '../../utils/ComponentCreator';
import { DataItem } from '../../../types';

export default class TableView extends ComponentCreator {
    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'section',
            classNames: ['table'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        // this.configureView();
    }
    // configureView() {
    //     this.appendChildren([this.header, this.main]);
    // }
}
