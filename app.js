// app.js

// Get handle to the img tag with the id of #image1 
const image = document.querySelector('#image1')
// Declare an array that holds the file paths to 5 image
const pics = ['images/100-400x400.jpg', 'images/101-400x400.jpg', 'images/401-400x400.jpg', 'images/501-400x400.jpg', 'images/830-400x400.jpg']

// Declare two variables. Note that they are not set to any value. By default JavaScript will set them to undefined
let current
let timer

// Function to switch out the image
function startSwitcher() {
    // Generate a random number
    // Reference: https://www.w3schools.com/js/js_math.asp
    let index = Math.floor(Math.random() * (pics.length - 1))
    // Check to make sure the index is not the current index (the current image)
    if (current == index) {
        index = Math.floor(Math.random() * (pics.length - 1))
    }
    // Save the current index in a variable
    current = index
    // Change the img's src attribute
    image.setAttribute('src', pics[index])
}

// Function to stop the switcher
function stopSwitcher() {
    // Clear the interval that was created
    clearInterval(timer)
    console.log('The animation has been stopped')
}

// Function to start the image switcher
function start() {
    // Create an interval that executes very 3 seconds and calls the startSwitcher function
    timer = setInterval(startSwitcher, 3000)
    console.log('The animation has been started')
}

// Bind event listeners to the image for mouseover and mouseout events
image.addEventListener('mouseover', stopSwitcher)
image.addEventListener('mouseout', start)

// Start the entire process
start()
