import ComponentCreator from '../../utils/component-creator';

const cssClasses = {
  FOOTER: 'footer',
  CONTAINER: 'container footer__container',
  FOOTER_LINKS: 'footer__links',
  FOOTER_COPY: 'footer__copy',
};

const textContent = {
  COPY: '© Rigelion 2023',
};
export default class FooterView extends ComponentCreator {
  constructor() {
    super(cssClasses.FOOTER, 'footer');
    this.createView();
  }

  createView() {
    const container = new ComponentCreator(cssClasses.CONTAINER);
    const footerLinks = new ComponentCreator(cssClasses.FOOTER_LINKS);
    const links = [
      {
        cssClassLink: 'footer__link',
        src: 'https://github.com/Rigelion154',
        cssClassImage: 'footer__image footer__image-git',
      },
      {
        cssClassLink: 'footer__link',
        src: 'https://rs.school/js/',
        cssClassImage: 'footer__image footer__image-rs',
      },
    ];

    links.forEach((el) => {
      const link = new ComponentCreator(el.cssClassLink, 'a');
      (link.getElement() as HTMLLinkElement).href = el.src;
      const image = new ComponentCreator(el.cssClassImage);

      link.addInnerElement(image.getElement());

      footerLinks.addInnerElement(link.getElement());
    });

    const footerCopy = new ComponentCreator(cssClasses.FOOTER_COPY, 'h3');
    footerCopy.setTextContent(textContent.COPY);
    container.getElement().append(footerLinks.getElement(), footerCopy.getElement());
    this.element.append(container.getElement());
  }
}
