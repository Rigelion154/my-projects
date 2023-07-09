import ComponentCreator from '../../utils/component-creator';

const CssClasses = {
  BUTTON: 'button nav__button',
};
export default class HeaderButtons extends ComponentCreator {
  constructor() {
    super(CssClasses.BUTTON, 'button');
  }
}
