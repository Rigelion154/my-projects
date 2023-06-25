import ComponentCreator from '../../../../utils/ComponentCreator';

export default class EditorLeftView extends ComponentCreator {
    input: ComponentCreator;
    button: ComponentCreator;
    constructor() {
        const options = {
            tagName: 'section',
            classNames: ['editor__left'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.input = new ComponentCreator({
            tagName: 'input',
            classNames: ['editor__input'],
        });
        this.button = new ComponentCreator({
            tagName: 'button',
            classNames: ['editor__button'],
            textContent: 'Enter',
        });
        this.configureView();
    }
    configureView() {
        const header = new ComponentCreator({
            classNames: ['editor__left-header'],
            parentNode: this.getNode(),
        });
        header.getNode().innerHTML = `<span>CSS Editor</span><span>style.css</span>`;

        const main = new ComponentCreator({
            classNames: ['editor__left-main'],
            parentNode: this.getNode(),
        });
        const mainField = new ComponentCreator({
            classNames: ['editor__left-field'],
        });

        const mainNumbers = new ComponentCreator({
            classNames: ['editor__left-numbers'],
            parentNode: main.getNode(),
        });
        for (let i = 1; i <= 15; i += 1) {
            mainNumbers.getNode().innerHTML += `<span>${i}</span>`;
        }
        mainField.appendChildren([this.input, this.button]);
        main.append(mainField);
    }
}
