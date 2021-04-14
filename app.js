// app.js

const image = document.querySelector('#image1')
const imageInfo = document.querySelector('#imageinfo') 
const pics = ['100-400x400.jpg', '101-400x400.jpg', '401-400x400.jpg', '501-400x400.jpg', '830-400x400.jpg']

let current = '101-400x400.jpg'
let timer

function startSwitcher() {
    let position = Math.floor(Math.random() * pics.length)
    while (current == position) {
        position = Math.floor(Math.random() * pics.length)
    }
    current = position
    image.setAttribute('src', 'images/' + pics[position])
    imageInfo.innerText = pics[position]
}

function stopSwitcher() {
    clearInterval(timer)
    console.log('The animation has been stopped')
}

function start() {
    timer = setInterval(startSwitcher, 3000)
    console.log('The animation has been started')
}

image.addEventListener('mouseover', stopSwitcher)
image.addEventListener('mouseout', start)

start()
