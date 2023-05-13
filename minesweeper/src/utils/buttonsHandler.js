export function resetButton (field) {
  const button = document.querySelector('.reset')
  button.addEventListener('click', ()=>{
    field.getField()
  })
}