import ComponentCreator from '../../utils/ComponentCreator';
import { DataItem } from '../../../types';
import EditorLeftView from './editorLeft/EditorLeftView';
import EditorRightView from './editorRight/EditorRightView';

export default class EditorView extends ComponentCreator {
    editorLeft: ComponentCreator;
    editorRight: ComponentCreator;
    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'section',
            classNames: ['editor'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.editorLeft = new EditorLeftView(data, index);
        this.editorRight = new EditorRightView(data, index);
        this.configureView();
    }
    configureView() {
        this.appendChildren([this.editorLeft, this.editorRight]);
    }
}
