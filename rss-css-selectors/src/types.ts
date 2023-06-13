type DataItem = {
    id: number;
    taskTitle: string;
    taskSelectors: string[];
};

type ComponentOptions = {
    tagName: string;
    classNames: string[];
    textContent?: string;
    parentNode?: HTMLElement;
};

export { DataItem, ComponentOptions };
