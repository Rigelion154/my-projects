import Storage from './storage';

type CarResponse = {
  name: string;
  color: string;
  id: number;
};

type WinResponse = {
  id: number;
  wins: number;
  time: number;
};

// type EngineResponse = {
//   velocity: number;
//   distance: number;
// };

const BASE_URL = 'http://127.0.0.1:3000';
const PATH = {
  garage: '/garage',
  winners: '/winners',
  engine: '/engine',
};

async function createCar(name: string, color: string) {
  await fetch(`${BASE_URL}${PATH.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      color,
    }),
  });
}

async function createWinner(id: number, wins: number, time: number) {
  await fetch(`${BASE_URL}${PATH.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      wins,
      time,
    }),
  });
}

async function getCars() {
  const garage = await fetch(
    `${BASE_URL}${PATH.garage}?_page=${Storage.currentGaragePage}&_limit=${Storage.maxGaragePageItem}`
  );
  const cars: CarResponse[] = await garage.json();
  const totalCars = garage.headers.get('X-Total-Count');
  return { cars, totalCars };
}

async function getWinners() {
  const garage = await fetch(
    `${BASE_URL}${PATH.winners}?_page=${Storage.currentWinnersPage}&_limit=${Storage.maxWinnersPageItem}`
  );
  const cars: WinResponse[] = await garage.json();
  return cars;
}

async function editCar(name: string, color: string, id: number) {
  await fetch(`${BASE_URL}${PATH.garage}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      color,
    }),
  });
}

async function editWinner(wins: number, time: number, id: number) {
  await fetch(`${BASE_URL}${PATH.winners}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wins,
      time,
    }),
  });
}

async function switchCarEngine(id: number, status: string) {
  const engine = await fetch(`${BASE_URL}${PATH.engine}?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  return engine.json();
}

async function deleteCar(id: number) {
  await fetch(`${BASE_URL}${PATH.garage}/${id}`, { method: 'DELETE' });
}

export { createCar, createWinner, getCars, getWinners, deleteCar, editCar, editWinner, switchCarEngine };
