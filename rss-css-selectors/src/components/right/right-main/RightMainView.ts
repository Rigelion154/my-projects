import ComponentCreator from '../../utils/ComponentCreator';
import { DataItem } from '../../../types';

export default class RightMainView extends ComponentCreator {
    selectorName: ComponentCreator;
    helpTitle: ComponentCreator;
    syntax: ComponentCreator;
    help: ComponentCreator;
    examples: ComponentCreator;
    example: ComponentCreator[];
    index: number;

    constructor(data: DataItem[], index: number) {
        const options = {
            tagName: 'div',
            classNames: ['right__main'],
            textContent: '',
            parentNode: undefined,
        };
        super(options);
        this.index = index;
        this.selectorName = new ComponentCreator({
            tagName: 'h3',
            classNames: ['right__selector-name'],
            textContent: ``,
            parentNode: this.getNode(),
        });
        this.helpTitle = new ComponentCreator({
            tagName: 'h2',
            classNames: ['right__help'],
            textContent: ``,
            parentNode: this.getNode(),
        });
        this.syntax = new ComponentCreator({
            tagName: 'h3',
            classNames: ['right__syntax'],
            textContent: ``,
            parentNode: this.getNode(),
        });
        this.help = new ComponentCreator({
            tagName: 'div',
            classNames: ['right__hint'],
            textContent: ``,
            parentNode: this.getNode(),
        });
        this.examples = new ComponentCreator({
            tagName: 'div',
            classNames: ['right__examples'],
            textContent: ``,
            parentNode: this.getNode(),
        });
        this.example = [];
        data[index].examples.forEach(() => {
            const example = new ComponentCreator({
                tagName: 'div',
                classNames: ['example'],
                textContent: '',
                parentNode: this.examples.getNode(),
            });
            this.example.push(example);
        });

        this.setTextContent(data, index);
    }

    setTextContent(data: DataItem[], index: number) {
        data[index].selectorName
            ? this.selectorName.addTextContent(`${data[index].selectorName}`)
            : this.selectorName.addTextContent(``);
        data[index].helpTitle
            ? this.helpTitle.addTextContent(`${data[index].helpTitle}`)
            : this.selectorName.addTextContent(``);
        data[index].syntax
            ? (this.syntax.getNode().innerHTML = data[index].syntax)
            : (this.syntax.getNode().innerText = '');
        data[index].help ? (this.help.getNode().innerHTML = data[index].help) : (this.help.getNode().innerText = '');
        data[index].examples
            ? this.example.forEach((el, elIndex) => {
                  data[index].examples[elIndex]
                      ? (el.getNode().innerHTML = data[index].examples[elIndex])
                      : (el.getNode().innerText = '');
              })
            : (this.examples.getNode().innerText = '');
    }
}
