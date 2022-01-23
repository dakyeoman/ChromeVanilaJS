const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; 
//Math.random = random number between 0&1 -> Math.floor (ex)4.33 -> 4

const bgImage = document.createElement("img"); //create HTML object
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage) //add html to body *from JS!