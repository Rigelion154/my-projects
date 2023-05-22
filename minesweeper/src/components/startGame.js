import smile from "../assets/smile.png";
import {interval, resetButtonHandler} from "../utils/timer";
import {sizeButtonsHandler} from "./buttonsHandler";
import {getTheme} from "../utils/theme";
import {Field} from "./Field";
import {getField} from "../utils/getField";
import {getStorageScore} from "../utils/score";

export function fieldSizeHandler() {
  window.addEventListener('resize', () => {
    const field = document.querySelector('.field')
    field.style.height = `${field.offsetWidth}px`
    document.querySelectorAll('.cell').forEach(el=>{
      el.style.height = `${el.offsetWidth}px`
    })
  })
}


function gameSettings(field) {
  document.querySelector('.popup-loose').style.zIndex = '-1'
  document.querySelector('.popup-loose').style.opacity = '0'
  document.querySelector('.popup-win').style.zIndex = '-1'
  document.querySelector('.popup-win').style.opacity = '0'
  document.querySelector('.reset').src = `${smile}`
  document.querySelector('.score-menu').classList.remove('menu-open')
  clearInterval(interval)
  field.getField()
  resetButtonHandler()
  sizeButtonsHandler()
  getTheme()
}

export function startGame() {
  const medium = document.querySelector('.medium')
  const small = document.querySelector('.small')
  const large = document.querySelector('.large')
  const minesInput = document.querySelector('.set-mines__input')
  getStorageScore ()
  if (minesInput.value === '') minesInput.value = 10
  if (small.classList.contains('active')) {
    getField(100)
    const field = new Field(10, 10, minesInput.value);
    gameSettings(field)
  } else if (medium.classList.contains('active')) {
    getField(225)
    const field = new Field(15, 15, minesInput.value);
    gameSettings(field)
    document.querySelectorAll('.cell').forEach(el=>{
      el.classList.add('medium-cell')
    })
  } else if (large.classList.contains('active')) {
    getField(625)
    const field = new Field(25, 25, minesInput.value);
    gameSettings(field)
    document.querySelectorAll('.cell').forEach(el=>{
      el.classList.add('big')
    })
  }

}