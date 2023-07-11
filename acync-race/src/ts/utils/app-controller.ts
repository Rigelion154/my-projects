import Car from '../components/car/car';
// import GarageCreatorCar from "../components/main/garage/garage-toolbar/garage-editor/garage-creator-car";

export default class AppController {
  async createButtonHandler(button: HTMLButtonElement, car: Car, brand: string, color: string, container: HTMLElement) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      await car.renderCar(brand, color, container);
    });
  }
}
