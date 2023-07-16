type Winner = {
  id: number;
  winCount: number;
  time: number;
};

export default class Storage {
  static editCarId = 0;
  static currentGaragePage = 1;
  static currentWinnersPage = 1;
  static maxGaragePageItem = 7;
  static maxWinnersPageItem = 10;
  static isAnimationEnd = false;
  static winner: Winner[] = [];
  static winners: Winner[] = [];
  static getGarageMaxPages = async () => {
    let maxPage = 0;
    const garage = await fetch(`http://127.0.0.1:3000/garage?_page=1&_limit=${Storage.maxGaragePageItem}`);
    const totalCars = garage.headers.get('X-Total-Count');
    if (totalCars) maxPage = Math.ceil(Number(totalCars) / Storage.maxGaragePageItem);
    return maxPage;
  };
  static getWinnersMaxPages = async () => {
    let maxPage = 0;
    const garage = await fetch(`http://127.0.0.1:3000/garage?_page=1&_limit=${Storage.maxWinnersPageItem}`);
    const totalCars = garage.headers.get('X-Total-Count');
    if (totalCars) maxPage = Math.ceil(Number(totalCars) / Storage.maxWinnersPageItem);
    return maxPage;
  };
}
