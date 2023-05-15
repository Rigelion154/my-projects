export function getHtmlElements() {
  document.body.innerHTML = `
      <aside class="aside">
        <div class="buttons">
          <h2 class="buttons__title">Field Size</h2>
          <button class="small button active button-active">10x10</button>
          <button class="medium button">15x15</button>
          <button class="large button">25x25</button>
        </div>
        <div class="theme">
        <h2 class="theme__title">Theme</h2>
<!--        <button class="light button">Light</button>-->
        <button class="dark button">Dark</button>
        </div>
        <div class="score button">Score</div>
      </aside>
      <div class="container">
        <div class="header">
          <div class="center">
            <div class="timer">000 </div>
            <img src="./assets/smile.png" alt="smile" class="reset">
            <div class="progress"></div>
          </div>
        </div>
        <div class="field"></div>
        <div class="popup-loose popup">You Loose</div>
        <div class="popup-win popup">You Win</div>
      </div>
`}

getHtmlElements()

