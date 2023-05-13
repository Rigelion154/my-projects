import {Field, startGame} from "../components/field";


export let interval;

let sec = 0

function startTimer() {
  const timer = document.querySelector('.timer')
  sec++
  if (sec > 99) {
    timer.innerHTML = `${sec}`
  } else if (sec > 9) {
    timer.innerHTML = `0${sec}`
  } else timer.innerHTML = `00${sec}`
}


export function timers() {
  clearInterval(interval)
  interval = setInterval(startTimer, 1000)
}

export function resetButtonHandler() {
  const timer = document.querySelector('.timer')
  timer.textContent = '000'
  sec = 0
  const button = document.querySelector('.reset')
  button.addEventListener('click', startGame)
  button.addEventListener('mousedown', () => {
    button.classList.add('clicked')
  })
  button.addEventListener('mouseup', () => {
    button.classList.remove('clicked')
  })
}

export function sizeButtonsHandler() {
  const medium = document.querySelector('.medium')
  const small = document.querySelector('.small')
  const large = document.querySelector('.large')

  medium.addEventListener('click', () => {
    medium.classList.add('active')
    small.classList.remove('active')
    large.classList.remove('active')
    startGame()
  })
  small.addEventListener('click', () => {
    small.classList.add('active')
    large.classList.remove('active')
    medium.classList.remove('active')
    startGame()
  })
  large.addEventListener('click', () => {
    large.classList.add('active')
    small.classList.remove('active')
    medium.classList.remove('active')
    startGame()
  })
}




