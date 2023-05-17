import audio from '../assets/sounds/restart.mp3'
import {startGame} from "../components/startGame";


export let interval;
const restartAudio = new Audio(audio)
let sec = 0
let min = 0

function startTimer() {
  const timer = document.querySelector('.timer')
  sec++
  if (sec > 60) {
    min++
    sec = 0
  }
  timer.innerHTML = `${min}`.padStart(2, '0') + ':' + `${sec}`.padStart(2, '0')
}

export function timers() {
  clearInterval(interval)
  interval = setInterval(startTimer, 1000)
}

export function resetButtonHandler() {
  const timer = document.querySelector('.timer')
  timer.textContent = '00:00'
  sec = 0
  const button = document.querySelector('.reset')
  button.addEventListener('click', startGame)
  button.addEventListener('mousedown', () => {
    restartAudio.play()
    button.classList.add('clicked')
  })
  button.addEventListener('mouseup', () => {
    button.classList.remove('clicked')
  })
}






