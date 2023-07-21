const quote1 = '"Out of the mountain iof despair, a stone of hope ." Martin Luther King, Jr.'

const quote2 = '"When you have a dream, you have got to grab it and vever let go." Carol Burnett.'

const quote3 = '"Nothing is impossible. The word itself says \'I\'M POSSIBLE!\'" Audrey Hepburn.'

const quote4 = '"There is nothing impossible to they who try." Alexander The Great.'

const quote5 = '"The bad news is time flies. The good news is you arw the pilot." Micheal Alshuler.'

let quotes = [quote1, quote2, quote3, quote4, quote5]

let emoji = [8987,9193,9194,9195,9196,9197,9198,9199,9200,9201,9202,9203,9208,9209,9210,9410]

const runQuotes = (quote) => {
    let i = Math.floor(Math.random() * quote.length);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let randomEmoji = Math.floor(Math.random()* emoji.length)
        return quotes[i] + ` #${randomColor} &#${emoji[randomEmoji]}.` 
        // return document.getElementsByClassName('words').innerHTML = value[i];
        // document.body.style.background = "#" + randomColor;
        // document.body.style.color = "#" + randomColor;
        // document.getElementsByTagName('span') =
    }

// runQuotes(quotes)

console.log(runQuotes(quotes))






