import ComponentCreator from '../../../utils/ComponentCreator';

export class RightFooterView extends ComponentCreator {
    constructor() {
        const options = {
            classNames: ['footer', 'footer__wrapper'],
        };
        super(options);
        this.configureView();
    }

    configureView() {
        const github = new ComponentCreator({
            tagName: 'a',
            classNames: ['footer__github'],
        });
        (github.getNode() as HTMLLinkElement).href = 'https://github.com/Rigelion154';
        (github.getNode() as HTMLLinkElement).target = '_blank';
        const copy = new ComponentCreator({
            tagName: 'h3',
            classNames: ['footer__copy'],
            textContent: `© 2023`,
        });
        const school = new ComponentCreator({
            tagName: 'a',
            classNames: ['footer__school'],
        });
        (school.getNode() as HTMLLinkElement).href = 'https://rs.school/js/';
        (school.getNode() as HTMLLinkElement).target = '_blank';
        this.appendChildren([github, copy, school]);
    }
}
