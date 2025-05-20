document.addEventListener('DOMContentLoaded', () => {
  OpenMenu()
})

function OpenMenu() {
  // Получаем все элементы с классом .trigger
  const triggers = document.querySelectorAll('.menubutton')

  // Получаем полноэкранный блок и кнопку закрытия
  const fullscreenBlock = document.querySelector('.menufixed')
  const closeBtn = document.querySelector('.closebutton')

  // Открытие блока при клике на триггер
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      fullscreenBlock.style.display = 'flex'
    })
  })

  // Закрытие блока при клике на кнопку
  closeBtn.addEventListener('click', () => {
    fullscreenBlock.style.display = 'none'
  })
}
