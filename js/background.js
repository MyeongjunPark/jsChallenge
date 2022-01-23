const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
const body = document.querySelector("body")
const bgImg = document.querySelector("#background-img")

const chosenImage = images[Math.floor(Math.random() * images.length)]

body.style.backgroundImage = `url(img/${chosenImage})`
