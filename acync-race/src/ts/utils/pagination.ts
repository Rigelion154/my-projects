import Car from '../components/car/car';
import Storage from './storage';
import GarageView from '../components/main/garage/garage-view';

export default class Pagination {
  async nextButtonHandler(car: Car, garage: GarageView) {
    if (Storage.currentGaragePage < (await Storage.getGarageMaxPages())) {
      Storage.currentGaragePage += 1;
      await garage.setButtonsStatus();
      await car.renderCars();
    }
  }
  async prevButtonHandler(car: Car, garage: GarageView) {
    if (Storage.currentGaragePage > 1) {
      Storage.currentGaragePage -= 1;
      await garage.setButtonsStatus();
      await car.renderCars();
    }
  }
}
