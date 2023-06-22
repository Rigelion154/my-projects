import ComponentCreator from '../../../utils/ComponentCreator';
import { DataItem } from '../../../types';
import EditorLeftView from './editorLeft/EditorLeftView';
import EditorRightView from './editorRight/EditorRightView';

export default class EditorView extends ComponentCreator {
    editorLeft: EditorLeftView;
    editorRight: EditorRightView;
    constructor() {
        const options = {
            tagName: 'section',
            classNames: ['editor'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.editorLeft = new EditorLeftView();
        this.editorRight = new EditorRightView();
        this.configureView();
    }
    configureView() {
        this.appendChildren([this.editorLeft, this.editorRight]);
    }
    setTextContent(data: DataItem[], index: number) {
        this.editorRight.setTextContent(data, index);
    }
}
