let sec = 0
export let interval;

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


