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

// афиша зин по клику
document.addEventListener('DOMContentLoaded', function () {
  const imageSources = [
    'images/zin5.svg',
    'images/zin2.svg',
    'images/zin6.svg',
    'images/zin7.svg',
    'images/zin3.svg',
    'images/zin8.svg',
    'images/zin4.svg',
    'images/zin9.svg'
  ]
  let currentIndex = 0
  const container = document.getElementById('containerafi1')
  function addImage() {
    const img = document.createElement('img')
    img.src = imageSources[currentIndex % imageSources.length]
    img.classList.add('card')
    container.appendChild(img)
    setTimeout(() => {
      img.classList.add('show')
    }, 10)
    currentIndex++
  }
  document.getElementById('buttonafi1').addEventListener('click', () => {
    addImage()
  })
})

// карточка товара
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.toggle-color')
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('color-active')
    })
  })
})
