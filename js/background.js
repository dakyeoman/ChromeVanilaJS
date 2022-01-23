const images = ["0.jpg", "1.jpg", "2.jpg"];

//Math.random = random number between 0&1 -> Math.floor (ex)4.33 -> 4
const chosenImage = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img"); //create HTML object
bgImage.src = `img/${chosenImage}`;

//add html to body *from JS! Use appendChild or prependChild
document.body.appendChild(bgImage);

