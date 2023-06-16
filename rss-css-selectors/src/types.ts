type DataItem = {
    id: number;
    helpTitle: string;
    selectorName?: string;
    doThis: string;
    selector: string;
    syntax: string;
    help: string;
    examples: string[];
    boardMarkup: string;
};

type ComponentOptions = {
    tagName: string;
    classNames: string[];
    textContent: string | null;
    parentNode?: HTMLElement;
};

export { DataItem, ComponentOptions };
