import {timers, interval} from "../utils/timer";
import sad from '../assets/sad.png'
import boom from '../assets/sounds/boom.mp3'
import click from '../assets/sounds/click.mp3'

export class Field {
  constructor(width, height, bombsCount) {
    this.width = width
    this.height = height
    this.bombsCount = bombsCount
    this.cellsCount = width * height
    this.timerStart = true
    this.fieldDiv = document.querySelector('.field')
    this.bombs = [...Array(this.cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, this.bombsCount)
    this.progress = document.querySelector('.progress')
    this.progressCounter = 0
    this.openedCells = this.cellsCount
    this.boomSound = new Audio(boom)
    this.clickSound = new Audio(click)
    this.mines = document.querySelector('.mines__count')
    this.flags = document.querySelector('.flags__count')
  }

  getField() {
    // this.fieldDiv.innerHTML = ''
    // this.fieldDiv.className = 'field'
    // let count = this.cellsCount
    // while (count) {
    //   this.cell = document.createElement('div')
    //   this.cell.className = 'cell'
    //   if (document.querySelector('.dark').classList.contains('is-dark')) {
    //     this.cell.classList.add('dark-theme')
    //   }
    //   this.fieldDiv.append(this.cell)
    //   count--
    // }
    // document.querySelector('.field-wrapper').innerHTML = ''
    // document.querySelector('.field-wrapper').append(this.fieldDiv)

    // this.cellSize()
    this.cells = [...this.fieldDiv.children]
    this.progress.innerHTML = '000'
    this.mines.textContent = this.bombsCount
    this.flags.textContent = '0'

    this.fieldDiv.addEventListener('click', (e) => {
      const index = this.cells.indexOf(e.target)
      const row = Math.floor(index / this.width)
      const column = index % this.width

      if (!e.target.classList.contains('open') && !e.target.classList.contains('field') && !e.target.classList.contains('flag')) {
        this.getProgressCount()
      }
      if (this.timerStart) {
        timers()
        this.timerStart = false
      }
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

  getProgressCount() {
    this.progressCounter++
    if (this.progressCounter > 99) {
      this.progress.innerHTML = `${this.progressCounter}`
    } else if (this.progressCounter > 9) {
      this.progress.innerHTML = `0${this.progressCounter}`
    } else this.progress.innerHTML = `00${this.progressCounter}`
  }

  bombClickHandler(row, column) {
    if (!this.isValid(row, column)) return;
    const index = row * this.width + column
    const cell = this.cells[index]

    if (cell.classList.contains('open') || cell.classList.contains('flag')) return;

    cell.classList.add('open')

    if (this.isBomb(row, column)) {
      document.querySelector('.popup-loose').style.zIndex = '1'
      document.querySelector('.popup-loose').style.opacity = '1'
      document.querySelector('.reset').src = `${sad}`
      this.boomSound.play()
      clearInterval(interval)
      this.bombs.forEach(bomb => {
        this.cells[bomb].classList.add('bomb')
        this.cells[bomb].classList.add('open')
      })
      return;
    }

    this.openedCells--

    if (this.openedCells <= this.bombs.length) {
      this.bombs.forEach(bomb => {
        this.cells[bomb].classList.add('bomb')
        this.cells[bomb].classList.add('open')
      })
      document.querySelector('.popup-win').style.zIndex = '1'
      document.querySelector('.popup-win').style.opacity = '1'
      clearInterval(interval)
    }

    const count = this.getBombCount(row, column)
    if (count !== 0) {
      this.clickSound.play()
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

  // cellSize() {
  //   const cell = document.querySelectorAll('.cell')
  //   cell.forEach(el => {
  //     el.style.width = `${100 / this.width}%`
  //     el.style.height = `${el.offsetWidth}px`
  //   })
  // }
}


