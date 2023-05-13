export function getHtmlElements() {
  const html = `
  <div class="container">
    <div class="header">
      <div class="buttons">
        <button class="small button active">10x10</button>
        <button class="medium button">15x15</button>
        <button class="large button">25x25</button>
      </div>
      <div class="center">
        <div class="timer">000 </div>
        <img src="./assets/smile.png" alt="smile" class="reset">
        <div class="progress">000</div>
      </div>
      <div class="score">Score</div>
    </div>
    <div class="field">
    </div>
    <div class="popup"></div>
  </div>
`
  document.body.innerHTML = html
}

getHtmlElements()

