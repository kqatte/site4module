// document.addEventListener('DOMContentLoaded', () => {
//   OpenMenu()
// })

// // открыть меню
// function OpenMenu() {
//   const triggers = document.querySelectorAll('.menubutton')
//   const fullscreenBlock = document.querySelector('.menufixed')
//   const closeBtn = document.querySelector('.closebutton')
//   triggers.forEach((trigger) => {
//     trigger.addEventListener('click', () => {
//       fullscreenBlock.style.display = 'flex'
//     })
//   })
//   closeBtn.addEventListener('click', () => {
//     fullscreenBlock.style.display = 'none'
//   })
// }
document.addEventListener('DOMContentLoaded', function () {
  const imageSources = [
    'images/zin1.svg',
    'images/zin2.svg',
    'images/zin3.svg',
    'images/zin4.svg'
  ]

  let currentIndex = 0

  const container = document.getElementById('container')

  function addImage() {
    const img = document.createElement('img')
    img.src = imageSources[currentIndex % imageSources.length]
    img.classList.add('card')

    // Добавляем картинку в контейнер
    container.appendChild(img)

    // Запускаем анимацию через небольшую задержку
    setTimeout(() => {
      img.classList.add('show')
    }, 10)

    currentIndex++
  }

  // Подписываемся на событие клика по кнопке-изображению
  document.getElementById('add-button').addEventListener('click', () => {
    addImage()
  })
})
