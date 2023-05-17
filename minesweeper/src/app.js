import './style.css'
import {getHtmlElements} from "./utils/createHtml";
import {contextHandler} from "./components/contextMenuHandler";
import {fieldSizeHandler, startGame} from "./components/startGame";


function app() {
  getHtmlElements ()
  startGame()
  contextHandler()
  fieldSizeHandler()
}

app()