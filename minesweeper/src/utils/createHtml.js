export function getHtmlElements() {
  document.body.innerHTML = `
      <div class="container">
       <aside class="aside">
        <div class="buttons">
          <h3 class="buttons__title">Field Size</h3>
          <div class="buttons__wrapper">
            <button class="small button active button-active">10x10</button>
            <button class="medium button">15x15</button>
            <button class="large button">25x25</button>
          </div>
        </div>
          <div class="set-mines">
            <h3 class="set-mines__title">Mines Count</h3>
            <input class="set-mines__input" type="number" value="10" min="10" max="99" placeholder="min 10 max 99">
            <button class="set-mines__button button" type="submit">Ok</button>
          </div>
        <div class="second-row">
        <div class="theme">
          <h3 class="theme__title">Theme</h3>
          <button class="dark button">Dark</button>
          <div class="score button">Score</div>
        </div>

     </div>
        
      </aside>
        <div class="header">
          <div class="time">
            <h5 class="time__title">Time</h5>
            <div class="timer"></div>
          </div>
          <div class="steps">
            <h5 class="steps__title">Step</h5>
            <div class="progress"></div>
          </div>
          <div class="center">
            <img src= '' alt="smile" class="reset">
          </div>
          <div class="mines">
            <h5 class="mines__title">Mines</h5>
            <div class="mines__count">10</div>
          </div>
          <div class="flags">
            <h5 class="flags__title">Flags</h5>
            <div class="flags__count">0</div>
          </div>
          
        </div>
        <div class="field-wrapper">
        </div>
        <div class="popup-loose popup">Game over. Try again!</div>
        <div class="popup-win popup">You Win</div>
        <div class="score-menu">
          <ol class="score__list">
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
            <li class="score__item"></li>
</ol>
        </div>
      </div>
`
}

getHtmlElements()

