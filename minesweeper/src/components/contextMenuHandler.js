export function contextHandler() {
  const mines = document.querySelector('.mines__count')
  const flags = document.querySelector('.flags__count')
  const field = document.querySelector('.field')
  field.addEventListener('contextmenu', (e) => {
    if (mines.textContent > 0) {
      if (!e.target.classList.contains('open') && !e.target.classList.contains('field')) {
        e.target.classList.toggle('flag')
        e.preventDefault()
      }
      if (e.target.classList.contains('flag')) {
        mines.textContent = `${mines.textContent - 1}`
        flags.textContent = `${Number(flags.textContent) + 1}`
      }
      if (!e.target.classList.contains('flag') && !e.target.classList.contains('open') && !e.target.classList.contains('field')) {
        mines.textContent = `${Number(mines.textContent)+ 1}`
        flags.textContent = `${Number(flags.textContent)- 1}`
      }
    }

  })
}