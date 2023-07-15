type Winner = {
  id: number;
  winCount: number;
};

export default class Storage {
  static editCarId = 0;
  static currentPage = 1;
  static maxPageItem = 7;
  static winner: Winner[] = [];
  static winners: Winner[] = [];
  static carsArr = [];
  static getMaxPages = async () => {
    let maxPage = 0;
    const garage = await fetch(`http://127.0.0.1:3000/garage?_page=1&_limit=${Storage.maxPageItem}`);
    const totalCars = garage.headers.get('X-Total-Count');
    if (totalCars) maxPage = Math.ceil(Number(totalCars) / Storage.maxPageItem);
    return maxPage;
  };
}
