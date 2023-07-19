import { createCar } from './api';

const carBrands = [
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'BMW',
  'Mercedes-Benz',
  'Volkswagen',
  'Audi',
  'Nissan',
  'Hyundai',
  'Subaru',
  'Kia',
  'Mazda',
  'Lexus',
  'Tesla',
  'Porsche',
  'Jaguar',
  'Aston Martin',
  'Ferrari',
  'Lamborghini',
  'Lada',
];
const carModels = [
  'Camry',
  'Civic',
  'Mustang',
  'Corvette',
  '3 Series',
  'C-Class',
  'Golf',
  'A4',
  'Altima',
  'Elantra',
  'Impreza',
  'Optima',
  'Mazda3',
  'ES',
  'Model 3',
  '911',
  'F-Type',
  'DB11',
  '488',
  'Aventador',
  'Vesta',
];

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    const randomIndex = Math.floor(Math.random() * letters.length);

    color += letters[randomIndex];
  }

  return color;
}

function getRandomName() {
  const randomBrandIndex = Math.floor(Math.random() * carBrands.length);
  const randomModelIndex = Math.floor(Math.random() * carModels.length);

  const randomBrand = carBrands[randomBrandIndex];
  const randomModel = carModels[randomModelIndex];

  return `${randomBrand} ${randomModel}`;
}

export default async function getHundredCars() {
  const promises: Promise<void>[] = [];

  for (let i = 0; i < 100; i += 1) {
    const color = generateRandomColor();
    const name = getRandomName();
    promises.push(createCar(name, color));
  }

  await Promise.all(promises);
}
