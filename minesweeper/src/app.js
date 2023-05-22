import './style.css'
import {getHtmlElements} from "./utils/createHtml";
import {contextHandler} from "./components/contextMenuHandler";
import {fieldSizeHandler, startGame} from "./components/startGame";




function app() {
  getHtmlElements ()
  startGame()
  contextHandler()
  fieldSizeHandler()
  const scoreMenu = document.querySelector('.score-menu')
  const scoreButton = document.querySelector('.score')
  scoreButton.addEventListener('click', ()=>{
    scoreMenu.classList.toggle('menu-open')
  })
}

app()