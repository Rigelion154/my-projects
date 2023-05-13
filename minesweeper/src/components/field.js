import { getHtmlElements} from "../utils/createHtml";
import {timers, interval} from "../utils/timer";

export class Field {
  constructor(width, height, bombsCount) {
    this.width = width
    this.height = height
    this.bombs = bombsCount
    this.cellsCount = width * height
    this.timerStart = true
    this.fieldDiv = document.querySelector('.field')
    this.bombs = [...Array(this.cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, this.bombs)
    console.log(this.bombs)
  }


  getField() {
    this.fieldDiv.innerHTML = ''
    while (this.cellsCount) {
      this.cell = document.createElement('div')
      this.cell.className = 'cell'
      this.fieldDiv.append(this.cell)
      this.cellsCount--
    }
    this.cellSize()
    this.cells = [...this.fieldDiv.children]
    this.fieldDiv.addEventListener('click', ()=> {
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
      // cell.style.background = 'red'
      clearInterval(interval)
      this.bombs.forEach(bomb => {
        // this.cells[bomb].textContent = `💣`
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

function fieldSizeHandler (field) {
  window.addEventListener('load', ()=>{
    field.cellSize()
  })
  window.addEventListener('resize', ()=>{
    field.cellSize()
  })
}

export function startGame() {
  getHtmlElements()
  const field = new Field(10, 10, 10);
  field.getField()
  fieldSizeHandler (field)
  }





