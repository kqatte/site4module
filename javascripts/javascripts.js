// прелоадер
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader')
  const content = document.getElementById('content')
  setTimeout(() => {
    preloader.style.display = 'none'
    content.style.display = 'block'
  }, 4000)
})

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

// бургер меню
document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.burger')
  const fullscreenBlock = document.querySelector('.psevdosection2')
  const closeBtn = document.querySelector('.closeburger')

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      fullscreenBlock.style.display = 'flex'
    })
  })

  closeBtn.addEventListener('click', () => {
    fullscreenBlock.style.display = 'none'
  })

  fullscreenBlock.addEventListener('click', (e) => {
    if (e.target === fullscreenBlock) {
      fullscreenBlock.style.display = 'none'
    }
  })
})
