import {startGame} from "../components/field";

export function sizeButtonsHandler() {
  const medium = document.querySelector('.medium')
  const small = document.querySelector('.small')
  const large = document.querySelector('.large')

  medium.addEventListener('click', () => {
    medium.classList.add('active')
    medium.classList.add('button-active')
    small.classList.remove('active')
    small.classList.remove('button-active')
    large.classList.remove('active')
    large.classList.remove('button-active')
    startGame()
  })
  small.addEventListener('click', () => {
    small.classList.add('active')
    small.classList.add('button-active')
    large.classList.remove('active')
    large.classList.remove('button-active')
    medium.classList.remove('active')
    medium.classList.remove('button-active')
    startGame()
  })
  large.addEventListener('click', () => {
    large.classList.add('active')
    large.classList.add('button-active')
    small.classList.remove('active')
    small.classList.remove('button-active')
    medium.classList.remove('active')
    medium.classList.remove('button-active')
    startGame()
  })
}