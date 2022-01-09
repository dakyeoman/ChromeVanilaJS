// Create new variable; const: never change, let: could be updated, and var is dead now.
const a = 5;
const b = 5;
let myName = "nico"; 

console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log("hello " + myName)

myName = "Maritza"; //Update variable
console.log("hello " + myName)

// Booleans; true:1 or on, false:0 or off, null:nothing, undefined:value doesn't exist
const amIFat = null; 

let something = undefined;
console.log(amIFat);
console.log(something);

// Array:list something
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const sat = "Sat";
const sun = "Sun";

const daysOfWeek = [mon, tue, wed, thu, fri];
console.log(daysOfWeek[2])

// - Add more item to the array
daysOfWeek.push(sat, sun) 
console.log(daysOfWeek)


// Objects  
const player = {
    name: "Dada",
    points: 10,
    beautiful: true,
};
// - Access
console.log(player.name);
console.log(player["name"]);
// - Update 
player.name = "Maritza";
player.name = player.name + " libre"
console.log(player.name);

// - Add
player.age = 23;
console.log(player);


// function(Send data to function)
function sayHello(person, age){
    console.log("Hello! " + person, age);
}
sayHello("Anne", 23)

function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b)
}
plus(3, 41);
divide(3, 41);

const user = {
    name: "Maritza",
    sayHello: function(userName){ 
        console.log("hello! " + userName);
    },
};

user.sayHello("anne");


// get and do something w/ the data
const calculatorGood = {
    plus: function(a, b){
        console.log(a + b)
    }, 
    minus: function(a, b){
        console.log(a - b)
    },
    powerOf: function(a, b){
        console.log(a**b)
    }
}
calculatorGood.powerOf(12932, 39291);

function calculatorBad(a, b){
    plus: console.log(a + b);
    minus: console.log(a - b);
    multi: console.log(a * b);
    div: console.log(a / b);
    mean: console.log(a + b / 2)
}
calculatorBad(483, 3);


// *Return value of the function; 
//  -> get the Result of the job(Value) out of the function
// Below: calculateKrAge -> age = 96 -> 96 + 2 = call 98

console.log(calculatorGood.plus(2, 3)) // undefined

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);


const calculatorBetter = {
    plus: function(a, b){
        return a + b;
    }, 
    minus: function(a, b){
        return a - b;
    },
    powerOf: function(a, b){
        return a**b;
    }
}
calculatorBetter.plus(12932, 39291);

// Conditionals *should be Booleans
// parseInt(string type -> int type) and NaN(Not a Number)
// && : and, true&true === true
// || : or, true&false, false&true === true 
// === : is, !== : is not 

const askAge = parseInt(prompt("Age?"));
console.log(isNaN(askAge));

if(isNaN(askAge)){ 
    console.log("Please write a number.")
} else {
    console.log("OKAY.");
}

if(isNaN(askAge) || askAge <0){
    console.log("Please write a real number.")
} else if(askAge <= 15){
    console.log("PLAY.");
} else if(askAge >=16 && askAge <= 60){
    console.log("WORK.");
} else if(askAge ===100){
    console.log("Wow. Congratulation.");
} else {
    console.log("REST.");
}


// Event
function handleMouseEnter(){
    h1.innerText = "Mouse is here."
}
function handleMouseLeave(){
    h1.innerText = "Mouse is Gone."
}
function handleWindowResize(){
    document.body.style.backgroundColor = "beige";
}
function handleWindowCopy(){
    h1.style.color= "red";
}
function handleWindowOffline(){
    alert("No WIFI!")
}
function handleWindowOnline(){
    alert("HI WIFI!")
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// #interact w/ Events

// hellos = array
const hellos = document.getElementsByClassName("hello");
console.log(hellos) 

// querySelector:CSS Selector, it only get the first element 
// use querySelectorAll to get the whole thing 
const h1 = document.querySelector(".hello:first-child h1") // .className
h1.innerText = "Hello";
console.log(h1)

//const h2 = document.querySelector(".hello h1");
//const h3 = document.getElementsByClassName("hello");
//console.log(h2, h3) // Same value

// Events
// find Events: https://developer.mozilla.org/en-US/docs/Web/API/Element
// console.dir(title) // events: on -- (ex)oncopy, onclick


function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "green"){
        newColor = "tomato";
    } else {
        newColor = "green";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


// 'toggle' contains..
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick)

// same feature below
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}
h1.addEventListener("click", handleTitleClick)
