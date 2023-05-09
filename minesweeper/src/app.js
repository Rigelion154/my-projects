import {createField, field, getMines, renderField} from "./components/field";
import {mines} from "./components/mines";


function start() {
  createField();
  getMines();
  renderField(field)
  console.log(field);
}

start()