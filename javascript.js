const quote1 = '"Out of the mountain iof despair, a stone of hope ." Martin Luther King, Jr.'

const quote2 = '"When you have a dream, you have got to grab it and vever let go." Carol Burnett.'

const quote3 = '"Nothing is impossible. The word itself says \'I\'M POSSIBLE!\'" Audrey Hepburn.'

const quote4 = '"There is nothing impossible to they who try." Alexander The Great.'

const quote5 = '"The bad news is time flies. The good news is you arw the pilot." Micheal Alshuler.'

let quotes = [quote1, quote2, quote3, quote4, quote5]

let emoji = [128568, 128569, 128570, 128571, 128572, 128573, 128574, 128575, 128576, 128577, 128578, 128579, 128580]

let element = document.querySelector('button');
let elm = document.querySelector('div');
let elem = document.querySelector('span');
let randomEmoji = Math.floor(Math.random()* emoji.length)
let randomcolor = Math.floor(Math.random()*16777215).toString(16)
let randomSentence = Math.floor(Math.random() * quotes.length)
let paragraph = document.createElement('p');
function run(){
    elm.style.backgroundColor = `#${randomcolor}`;
    elem.style.color = `#${randomcolor}`;
    elm.innerHTML = quotes[randomSentence]
    paragraph.innerHTML = `&#${emoji[randomEmoji]}`
    document.body.appendChild(paragraph)

}

element.onclick = run


