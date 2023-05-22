let scoreArray = []

export function getScore() {
  const scoreItem = document.querySelectorAll('.score__item')
  let score = ''
  const date = new Date()
  const timer = document.querySelector('.timer')
  score = `${date.toTimeString().slice(0, 5)} ${date.toDateString().slice(4, 16)} - Your time ${timer.textContent}`

    if (scoreArray.length < 10) {
      scoreArray.push(score)
      localStorage.setItem('score', JSON.stringify(scoreArray));
    } else {
      scoreArray.shift()
      scoreArray.push(score)
      localStorage.setItem('score', JSON.stringify(scoreArray));
    }

    scoreItem.forEach((el, i) => {
      el.textContent = scoreArray[i]
    })
}

export function getStorageScore () {
  const scoreItem = document.querySelectorAll('.score__item')
  if (localStorage.getItem('score') !== null )scoreArray = JSON.parse(localStorage.getItem('score'))
  scoreItem.forEach((el, i) => {
    el.textContent = scoreArray[i]
  })
}