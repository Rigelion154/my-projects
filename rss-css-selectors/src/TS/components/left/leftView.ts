import ComponentCreator from '../../utils/ComponentCreator';
import { DataItem } from '../../types';
import TableView from './table/Table';
import EditorView from './editor/EditorView';
import { hoverHtmlMarkup } from '../../utils/setHoverHtmlMarkup';

class LeftView extends ComponentCreator {
    title: ComponentCreator;
    table: TableView;
    editor: EditorView;
    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'section',
            classNames: ['main', 'main__container'],
        };
        super(options);
        this.title = new ComponentCreator({
            tagName: 'h2',
            classNames: ['task-title'],
            parentNode: this.getNode(),
        });
        this.table = new TableView();
        this.editor = new EditorView();
        this.configureView();
        this.setTextContent(data, index);
    }

    configureView() {
        this.appendChildren([this.table, this.editor]);
        hoverHtmlMarkup(this.table.container.getNode(), this.editor.editorRight.mainTags.getNode());
        hoverHtmlMarkup(this.editor.editorRight.mainTags.getNode(), this.table.container.getNode());
    }
    setTextContent(data: DataItem[], index: number) {
        this.title.addTextContent(data[index].doThis);
        this.table.container.getNode().innerHTML = data[index].boardMarkup;
        this.editor.setTextContent(data, index);
    }
}

export { LeftView };
