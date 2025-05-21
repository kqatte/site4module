document.addEventListener('DOMContentLoaded', () => {
  OpenMenu()
})

function OpenMenu() {
  const triggers = document.querySelectorAll('.menubutton')
  const fullscreenBlock = document.querySelector('.menufixed')
  const closeBtn = document.querySelector('.closebutton')
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      fullscreenBlock.style.display = 'flex'
    })
  })
  closeBtn.addEventListener('click', () => {
    fullscreenBlock.style.display = 'none'
  })
}
