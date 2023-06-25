import EditorRightView from '../components/left/editor/editorRight/EditorRightView';
import EditorLeftView from '../components/left/editor/editorLeft/EditorLeftView';
import { data } from '../data/data';
import { App } from '../components/app';

export class InputHandler {
    app: App;
    input: EditorLeftView;
    tags: EditorRightView;
    constructor(input: EditorLeftView, tags: EditorRightView, app: App) {
        this.input = input;
        this.tags = tags;
        this.app = app;
        this.setListeners();
    }
    setListeners() {
        const inputElement = this.input.input.getNode() as HTMLInputElement;
        const button = this.input.button.getNode() as HTMLButtonElement;
        const tagsElement = this.tags.mainTags.getNode() as HTMLElement;

        const handleEvent = (): boolean | void => {
            const firstList = tagsElement.querySelectorAll(inputElement.value);
            const secondList = tagsElement.querySelectorAll(data[this.app.index].selector);
            if (compareNodeLists(firstList, secondList)) {
                const newIndex = this.app.index + 1;
                this.app.updateIndex(newIndex);
                inputElement.value = '';
            } else {
                inputElement.value = '';
                return false;
            }
        };

        const handleKeyUp = (event: KeyboardEvent): void => {
            if (event.code === 'Enter') {
                handleEvent();
            }
        };

        button.addEventListener('click', handleEvent);
        inputElement.addEventListener('keyup', handleKeyUp);
    }
}

function compareNodeLists(list1: NodeList, list2: NodeList): boolean {
    const length1 = list1.length;
    const length2 = list2.length;

    if (length1 !== length2) {
        return false;
    }

    for (let i = 0; i < length1; i++) {
        const node1 = list1[i];
        const node2 = list2[i];

        if (node1 !== node2) {
            return false;
        }
    }

    return true;
}
