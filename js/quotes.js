const quotes = [
    {
        quote: "I think therefore I am",
        author: "Rene Descartes",
    },
    {
        quote: "Go ahead, make my day.",
        author: "Harry Callahan",
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
    },
    {
        quote: "Frankly, my dear, I don't give a damn.",
        author: "Rhett Butler",
    },
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen",
    },
    {
        quote: "Ask, and it shall be given you; seek, and you shall find.",
        author: "the Bible",
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John Kennedy",
    },
    {
        quote: "All the world’s a stage, and all the men and women merely players.",
        author: "William Shakespeare",
    },
    {
        quote: "All that glitters is not gold.",
        author: "William Shakespeare",
    },
    {
        quote: "A rose by any other name would smell as sweet.",
        author: "William Shakespeare",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;