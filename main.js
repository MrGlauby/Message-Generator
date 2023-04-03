"use strict";

console.log("Hello World");


//ansprechen der IDs
let bt = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    '"Wer das hier leist ist doof!"',
    '"Ich bin kluk, kluk!"',
    '"Ein Zufall ich glaube kaum!"',
    '"Oder vielleicht doch?"',
    '"Noch mehr test"',
    '"gleich ist alles vorbei"'

];

//create the function

btn.addEventListener('click', function(){
    const randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})


