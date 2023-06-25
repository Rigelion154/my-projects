export function hoverHtmlMarkup(hoverElement: HTMLElement, markeredElement: HTMLElement) {
    hoverElement.addEventListener('mouseover', function (event) {
        const target = event.target as HTMLElement;
        if (target.nodeType == Node.ELEMENT_NODE) {
            const childElements = getAllChildElements(hoverElement);
            if (childElements.includes(target)) {
                target.classList.add('check');
                const index = childElements.indexOf(target);
                markeredElement.querySelectorAll('*')[index].classList.add('check');
            }
        }
    });

    hoverElement.addEventListener('mouseout', function (event) {
        const target = event.target as HTMLElement;
        if (target.nodeType == Node.ELEMENT_NODE) {
            const childElements = getAllChildElements(hoverElement);
            if (childElements.includes(target)) {
                target.classList.remove('check');
                const index = childElements.indexOf(target);
                markeredElement.querySelectorAll('*')[index].classList.remove('check');
            }
        }
    });
}

function getAllChildElements(element: Element): Element[] {
    let childElements: Element[] = [];
    const childNodes = element.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (node.nodeType == Node.ELEMENT_NODE) {
            childElements.push(node as Element);
            childElements = childElements.concat(getAllChildElements(node as Element));
        }
    }
    return childElements;
}
