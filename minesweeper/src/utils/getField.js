const field= document.createElement('div')

export function getField (size) {
  // const field= document.createElement('div')
  // const field = document.querySelector('.field')
  field.className = 'field'
  field.innerHTML = ''
  while (size) {
    const cell = document.createElement('div')
    cell.className = 'cell'
    if (document.querySelector('.dark').classList.contains('is-dark')) {
      cell.classList.add('dark-theme')
    }
    field.append(cell)
    size--
  }
  document.querySelector('.field-wrapper').innerHTML = ''
  document.querySelector('.field-wrapper').append(field)

  field.style.height = `${field.offsetWidth}px`
}