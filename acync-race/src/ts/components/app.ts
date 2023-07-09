import HeaderView from './header/header-view';
import MainView from './main/main-view';
import FooterView from './footer/footer-view';

export default class App {
  createView() {
    const header = new HeaderView();
    const main = new MainView();
    const footer = new FooterView();
    document.body.append(header.getElement(), main.getElement(), footer.getElement());
  }
}
