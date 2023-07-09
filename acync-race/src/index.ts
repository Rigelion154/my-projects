// import './style.scss';
// // import App from './components/app';
//
// // const app = new App();
// // app.createView();
// const url = 'http://127.0.0.1:3000/garage';
//
// const getCars = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };
//
// const getCar = async () => {
//   const car = await getCars();
//   // @ts-ignore
//   // eslint-disable-next-line no-console
//   await car.forEach((el) => console.log(el.name));
// };
//
// getCar();
import './style.scss';
import App from './ts/components/app';

const app = new App();
app.createView();
