import ComponentCreator from '../utils/ComponentCreator';
import { DataItem } from '../../types';
import TableView from './table/Table';
import EditorView from './editor/EditorView';

class LeftView extends ComponentCreator {
    title: ComponentCreator;
    table: ComponentCreator;
    editor: ComponentCreator;
    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'section',
            classNames: ['main', 'main__container'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.title = new ComponentCreator({
            tagName: 'h2',
            classNames: ['task-title'],
            textContent: `${data[index].doThis}`,
            parentNode: this.getNode(),
        });
        this.table = new TableView(data, index);
        this.editor = new EditorView(data, index);
        this.configureView();
    }

    configureView() {
        this.appendChildren([this.table, this.editor]);
    }
}

export { LeftView };
