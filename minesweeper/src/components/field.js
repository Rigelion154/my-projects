import {timers, interval, resetButtonHandler, sizeButtonsHandler} from "../utils/timer";
// import {resetButtonHandler} from "./resetButton";

export class Field {
  constructor(width, height, bombsCount) {
    this.width = width
    this.height = height
    this.bombs = bombsCount
    this.cellsCount = width * height
    this.timerStart = true
    this.fieldDiv = document.querySelector('.field')
    this.bombs = [...Array(this.cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, this.bombs)
  }


  getField() {
    this.fieldDiv.innerHTML = ''
    let count = this.cellsCount
    while (count) {
      this.cell = document.createElement('div')
      this.cell.className = 'cell'
      this.fieldDiv.append(this.cell)
      count--
    }
    this.cellSize()
    this.cells = [...this.fieldDiv.children]
    this.fieldDiv.addEventListener('click', () => {
      if (this.timerStart) {
        timers()
        this.timerStart = false
      }
    })
    this.fieldDiv.addEventListener('click', (e) => {
      const index = this.cells.indexOf(e.target)
      const row = Math.floor(index / this.width)
      const column = index % this.width
      this.bombClickHandler(row, column)
    })
  }
  isValid(row, column) {
    return row >= 0 && row < this.height && column >= 0 && column < this.width
  }

  isBomb(row, column) {
    if (!this.isValid(row, column)) return false;
    const index = row * this.width + column
    return this.bombs.includes(index)
  }

  bombClickHandler(row, column) {
    if (!this.isValid(row, column)) return;
    const index = row * this.width + column
    const cell = this.cells[index]

    if (cell.classList.contains('open')) return;
    cell.classList.add('open')

    if (this.isBomb(row, column)) {
      document.querySelector('.popup').style.display = 'block'
      document.querySelector('.reset').src = './assets/sad.png'
      clearInterval(interval)
      this.bombs.forEach(bomb => {
        this.cells[bomb].classList.add('bomb')
        this.cells[bomb].classList.add('open')
      })
      return;
    }
    const count = this.getBombCount(row, column)
    if (count !== 0) {
      cell.textContent = count
      cell.classList.add(`cell-${count}`)
      return;
    }
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        this.bombClickHandler(row + y, column + x)
      }
    }
  }

  getBombCount(row, column) {
    let count = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.isBomb(row + j, column + i)) {
          count++
        }
      }
    }
    return count
  }

  cellSize() {
    const cell = document.querySelectorAll('.cell')
    cell.forEach(el => {
      el.style.width = `${100 / this.width}%`
      el.style.height = `${el.offsetWidth}px`
    })
  }

}

function fieldSizeHandler(field) {
  window.addEventListener('load', () => {
    field.cellSize()
  })
  window.addEventListener('resize', () => {
    field.cellSize()
  })
}

function gameSettings (field) {
  document.querySelector('.popup').style.display = 'none'
  document.querySelector('.reset').src = './assets/smile.png'
  clearInterval(interval)
  field.getField()
  fieldSizeHandler(field)
  resetButtonHandler()
  sizeButtonsHandler ()
}

export function startGame() {
  const medium = document.querySelector('.medium')
  const small = document.querySelector('.small')
  const large = document.querySelector('.large')
  if (small.classList.contains('active')) {
    const field = new Field(10, 10, 10);
    gameSettings (field)
  } else if (medium.classList.contains('active')) {
    const field = new Field(15, 15, 40);
    gameSettings (field)
  } else  if (large.classList.contains('active')) {
    const field = new Field(25, 25, 99);
    gameSettings (field)
  }

}






