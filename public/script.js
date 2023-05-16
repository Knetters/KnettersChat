let socket = io()
let messages = document.querySelector('section ul')
let input = document.querySelector('input')

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

socket.on('message', (message) => {
  addMessage(message)
})

socket.on('whatever', (message) => {
  addMessage(message)
})

socket.on('history', (history) => {
  history.forEach((message) => {
    addMessage(message)
  })
})

function addMessage(message) {
  const li = document.createElement('li')
  li.textContent = `user: ${message}`
  messages.appendChild(li)
  messages.scrollTop = messages.scrollHeight
}

document.addEventListener('click', (event) => {
  if (event.target !== input) {
    input.focus()
  }
})