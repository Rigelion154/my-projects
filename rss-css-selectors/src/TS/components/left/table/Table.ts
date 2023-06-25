import ComponentCreator from '../../../utils/ComponentCreator';

export default class TableView extends ComponentCreator {
    container: ComponentCreator;
    constructor() {
        const options = {
            tagName: 'section',
            classNames: ['table'],
        };
        super(options);
        this.container = new ComponentCreator({
            classNames: ['table__container'],
        });
        this.configureView();
    }
    configureView() {
        this.appendChildren([this.container]);
    }
}
