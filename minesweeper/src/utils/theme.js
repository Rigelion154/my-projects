export function getTheme() {
  document.querySelector('.dark').addEventListener('click', setTheme)
}

function setTheme() {
  document.body.classList.toggle('dark-theme')
  document.querySelector('.aside').classList.toggle('dark-theme')
  // document.querySelector('.field').classList.toggle('dark-theme')
  document.querySelector('.header').classList.toggle('dark-theme')
  document.querySelector('.reset').classList.toggle('dark-theme')
  document.querySelector('.dark').classList.toggle('is-dark')
  document.querySelector('.dark').classList.toggle('button-active')
  document.querySelectorAll('.cell').forEach(el => {
    el.classList.toggle('dark-theme')
  })
  document.querySelectorAll('.button').forEach(el => {
    el.classList.toggle('dark-theme')
  })
}