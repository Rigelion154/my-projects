import ComponentCreator from '../../../utils/ComponentCreator';
import { DataItem } from '../../../types';

export default class RightMainView extends ComponentCreator {
    selectorName: ComponentCreator;
    helpTitle: ComponentCreator;
    syntax: ComponentCreator;
    index: number;

    constructor(data: DataItem[], index: number) {
        const options = {
            classNames: ['right__main'],
            parentNode: undefined,
        };
        super(options);
        this.index = index;
        this.selectorName = new ComponentCreator({
            tagName: 'h3',
            classNames: ['right__selector-name'],
            parentNode: this.getNode(),
        });
        this.helpTitle = new ComponentCreator({
            tagName: 'h2',
            classNames: ['right__help'],
            parentNode: this.getNode(),
        });
        this.syntax = new ComponentCreator({
            tagName: 'h3',
            classNames: ['right__syntax'],
            parentNode: this.getNode(),
        });
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
    }
}
