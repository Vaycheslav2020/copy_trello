const listsCard = document.querySelectorAll('.list-card'),
  addCardBtn = document.querySelector('.add__button-card'),
  addFormCardBtn = document.querySelector('.form-add__card-btn'),
  cancelFormCardBtn = document.querySelector('.form-cancel__card-btn'),
  textarea = document.querySelector('.textarea'),
  form = document.querySelector('.form'),
  addBoardBtn = document.querySelector('.add-boards')

let value,
  draggableItem = null

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const nav = document.querySelector('nav')
  const app = document.querySelector('.app')
  nav.remove()
  form.remove()
  addCardBtn.remove()
  app.style.paddingTop = '10px'
}

addBoardBtn.addEventListener('click', function () {
  const boards = document.querySelector('.boards')
  const newBoard = document.createElement('div')

  newBoard.classList.add('board')
  newBoard.innerHTML = `
        <h4 contenteditable="true" class="board__title">Введите название</h4>
        <ul class="list-card"></ul>
  `
  boards.append(newBoard)
  changeBoardTitle()
  draggableCard()
})

addCardBtn.addEventListener('click', function () {
  form.style.display = 'block'
  this.style.display = 'none'
})

textarea.addEventListener('input', e => {
  value = e.target.value

  if (value.trim().length < 1) {
    addFormCardBtn.style.display = 'none'
  } else {
    addFormCardBtn.style.display = 'block'
  }
})

addFormCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('li')
  newCard.classList.add('card')
  newCard.draggable = true
  newCard.innerText = value
  newCard.title = 'кликни два раза чтобы удалить'
  listsCard[0].append(newCard)
  resetValue()
  draggableCard()
})

cancelFormCardBtn.addEventListener('click', () => {
  resetValue()
})

function resetValue() {
  textarea.value = ''
  value = ''
  form.style.display = 'none'
  addFormCardBtn.style.display = 'none'
  addCardBtn.style.display = 'block'
}

function changeBoardTitle() {
  const titles = document.querySelectorAll('.board__title')

  titles.forEach(title => {
    title.addEventListener('click', e => {
      const evt = e.target
      if (evt.textContent === 'Введите название') {
        evt.innerText = ''
      } else {
        return true
      }
      title.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
          this.blur()
        }
      })
    })
  })
}

changeBoardTitle()

function draggableCard() {
  const listItems = document.querySelectorAll('.card')
  const myLists = document.querySelectorAll('.list-card')

  for (let j = 0; j < listItems.length; j++) {
    const item = listItems[j]
    item.addEventListener('dragstart', () => {
      draggableItem = item
      setTimeout(() => {
        item.style.visibility = 'hidden'
      }, 0)
    })
    item.addEventListener('dragend', () => {
      setTimeout(() => {
        item.style.visibility = 'visible'
        draggableItem = null
      }, 0)
    })
    item.addEventListener('dblclick', () => {
      item.remove()
    })

    for (let i = 0; i < myLists.length; i++) {
      const list = myLists[i]

      list.addEventListener('dragover', e => e.preventDefault())
      list.addEventListener('dragenter', function () {
        this.style.backgroundColor = 'rgba(0,0,0, .3)'
      })
      list.addEventListener('dragleave', function () {
        this.style.backgroundColor = 'transparent'
      })
      list.addEventListener('drop', function (e) {
        this.style.backgroundColor = 'transparent'
        this.append(draggableItem)
      })
    }
  }
}

draggableCard()

function changeBackground() {
  const app = document.querySelector('.app')
  let items = [1,2,3,4,5,6,7,8,9,10,11,12]

  items.forEach(item => {
    const sel = document.getElementById('changeBg')
    const option = document.createElement('option')

    option.value = item
    option.innerText = `image ${item}`

    sel.append(option)

    sel.addEventListener('change', function (e) {
      let foo = e.target.value

      bg(foo)
    })


  })

  function bg(val) {
    app.style.backgroundImage = `url('../source/image/background/bg_${val}.jpg')`
  }
  bg(1)
}
changeBackground()
