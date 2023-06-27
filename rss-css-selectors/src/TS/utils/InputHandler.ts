import EditorRightView from '../components/left/editor/editorRight/EditorRightView';
import EditorLeftView from '../components/left/editor/editorLeft/EditorLeftView';
import { data } from '../data/data';
import { App } from '../app';

export class InputHandler {
    app: App;
    input: EditorLeftView;
    tags: EditorRightView;
    isHelp: boolean;
    constructor(input: EditorLeftView, tags: EditorRightView, app: App) {
        this.input = input;
        this.tags = tags;
        this.app = app;
        this.setListeners();
        this.isHelp = false;
    }
    setListeners() {
        const inputElement = this.input.input.getNode() as HTMLInputElement;
        const button = this.input.button.getNode() as HTMLButtonElement;
        const helpButton = this.input.buttonHelp.getNode();
        const tagsElement = this.tags.mainTags.getNode() as HTMLElement;
        const table = this.app.leftView.table.container.getNode();
        const editor = this.app.leftView.editor.getNode();

        const handleWrongAnswer = () => {
            if (!inputElement.value) {
                editor.classList.add('fail');
                editor.addEventListener('animationend', () => editor.classList.remove('fail'));
                return false;
            }
        };

        const handleEvent = (): boolean | void => {
            if (handleWrongAnswer() === false) return;
            const firstList = tagsElement.querySelectorAll(inputElement.value);
            const secondList = tagsElement.querySelectorAll(data[this.app.index].selector);
            if (compareNodeLists(firstList, secondList)) {
                table.classList.add('done-left');
                table.addEventListener('animationend', (event) => {
                    if (event.animationName === 'move-left') {
                        table.classList.remove('done-left');
                        table.classList.add('done-right');
                    }
                    if (event.animationName === 'move-right') {
                        // table.classList.remove('done-left');
                        table.classList.remove('done-right');
                    }
                });
                setTimeout(() => {
                    if (this.isHelp) {
                        this.app.rightView.checkLevelHelp(this.app.index);
                    } else this.app.rightView.checkLevel(this.app.index);

                    this.isHelp = false;
                    const newIndex = this.app.index + 1;
                    this.app.updateIndex(newIndex);
                    inputElement.value = '';
                }, 1000);
            } else {
                editor.classList.add('fail');
                editor.addEventListener('animationend', () => editor.classList.remove('fail'));
            }
        };

        helpButton.addEventListener('click', () => {
            this.isHelp = true;
            const answer = data[this.app.index].selector;
            let currentIndex = 0;
            const writeAnswer = setInterval(() => {
                inputElement.value = answer.substring(0, currentIndex + 1);
                currentIndex++;

                if (currentIndex === answer.length) clearInterval(writeAnswer);
            }, 125);
        });

        const handleKeyUp = (event: KeyboardEvent): void => {
            if (event.code === 'Enter') {
                handleEvent();
            }
        };
        button.addEventListener('click', () => {
            handleEvent();
        });
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
