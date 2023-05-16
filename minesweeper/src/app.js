import {startGame} from "./components/field";
import {getHtmlElements} from "./utils/createHtml";
import './style.css'

function app() {
  getHtmlElements ()
  startGame()
}

app()