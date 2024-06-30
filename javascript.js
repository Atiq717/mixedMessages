const quotes = [
    '"Out of the mountain of despair, a stone of hope." Martin Luther King, Jr.',
    '"When you have a dream, you have got to grab it and never let go." Carol Burnett.',
    '"Nothing is impossible. The word itself says \'I\'M POSSIBLE!\'" Audrey Hepburn.',
    '"There is nothing impossible to those who try." Alexander The Great.',
    '"The bad news is time flies. The good news is you are the pilot." Michael Altshuler.'
];

const emojis = [128568, 128569, 128570, 128571, 128572, 128573, 128574, 128575, 128576, 128577, 128578, 128579, 128580];

const buttonElement = document.querySelector('button');
const quoteBox = document.getElementById('quote-box');
const inspireText = document.getElementById('inspire-text');
const wordsElement = document.getElementById('words');

function run() {
    const randomEmoji = Math.floor(Math.random() * emojis.length);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomSentence = Math.floor(Math.random() * quotes.length);
    
    quoteBox.style.backgroundColor = `#${randomColor}`;
    wordsElement.style.color = 'black'; 
    wordsElement.innerHTML = `${quotes[randomSentence]} <br> <span style="font-size: 2em;">&#${emojis[randomEmoji]}</span>`;
    inspireText.style.display = 'none'; 
    wordsElement.style.display = 'block'; 
}

buttonElement.onclick = run;
