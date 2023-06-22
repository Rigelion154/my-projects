import ComponentCreator from '../../../utils/ComponentCreator';

export default class TableView extends ComponentCreator {
    constructor() {
        const options = {
            tagName: 'section',
            classNames: ['table'],
        };
        super(options);
    }
    configureView(callback: () => void) {
        this.addCallBack(callback);
    }
}
