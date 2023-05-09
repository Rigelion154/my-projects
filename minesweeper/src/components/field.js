import {getRandomNumber} from "../utils/getRandom";

export let field = []

function createField(width = 10, height = 10) {

  for (let i = 0; i < width; i++) {
    field[i] = []
    for (let j = 0; j < height; j++) {
      field[i][j] = 0
    }
  }
}

function getMines(mines = 10) {
  let minesCount = mines
  const width = field[0].length
  const height = field.length
  while (minesCount) {
    const x = getRandomNumber(0, width - 1);
    const y = getRandomNumber(0, height - 1);
    const fieldCell = field[x][y]
    if (!fieldCell) {

      field[x][y] = 1
      minesCount--
    }
  }

}

export function renderField(value) {
  const container = document.createElement('div');
  container.className = 'container'
  const fieldHtml = document.createElement('div');
  fieldHtml.className = 'field'
  value.forEach(row=>{
    row.forEach(el=>{
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.textContent = el
      fieldHtml.append(cell)
    })
  })
  container.append(fieldHtml)
  document.body.append(container)
  cellSize()
}


function cellSize () {
  const cell = document.querySelectorAll('.cell')
  cell.forEach(el=>{
    el.style.width = `${100 / field.length}%`
    el.style.height = `${el.offsetWidth}px`
  })
}

window.addEventListener('resize', cellSize)

export {createField, getMines}

