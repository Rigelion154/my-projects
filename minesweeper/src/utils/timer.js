import {startGame} from "../components/field";


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






