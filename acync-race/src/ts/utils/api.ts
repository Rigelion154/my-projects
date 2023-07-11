import getCarImage from './get-car-image';
import Car from '../components/car/car';

type QueryParams = {
  key: string;
  value: string;
};

const url = 'http://127.0.0.1:3000';
const path = {
  garage: '/garage',
  winners: '/winners',
};

// const generateQueryString = (queryParams: QueryParams[] = []): string =>
//   queryParams.length ? `?${queryParams.map((el) => `${el.key}=${el.value}`).join('&')}` : '';

// const getCars = async () => {
//   const garage = await fetch(`${url}${path.garage}`);
//   const cars = await garage.json();
//
//   // eslint-disable-next-line no-console
//   console.log(cars);
// };

// async function renderCars(container: HTMLElement) {
//   const garage = await fetch(`${url}${path.garage}`);
//   const cars = await garage.json();
//   // @ts-ignore
//   cars.forEach((car) => {
//     const carEl = document.createElement('div');
//     carEl.className = 'car';
//     carEl.innerHTML = getCarImage(car.color);
//     container.append(carEl);
//   });
// }
//
// const getCar = async (queryParams: QueryParams[]) => {
//   // const garage = await fetch(`${url}${path.garage}?id=${id}`);
//   const garage = await fetch(`${url}${path.garage}${generateQueryString(queryParams)}`);
//   const car = await garage.json();
//   return car;
//   // eslint-disable-next-line no-console
//   // console.log(car);
// };

// getCars();

// getCar([
//   { key: '_page', value: '2' },
//   { key: '_limit', value: '4' },
//   // { key: '_total', value: 'true' },
// ]);
