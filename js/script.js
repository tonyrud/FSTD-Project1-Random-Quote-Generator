"use strict";

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


/*------------------
 Variables
 -------------------*/

const quote = document.getElementById('loadQuote'),
      quoteContainer = document.getElementById('quote-box'),
      quotes = [
            {
                quote: 'Somewhere, something incredible is waiting to be known.',
                source: 'Carl Sagan',
                citation: 'Newsweek magazine',
                year: '1977',
                tag: 'Science'
            }, {
                quote: 'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
                source: 'Edwin Hubble',
                year: '1948',
                tag: 'Astronomy'
            }, {
                quote: 'Music is a higher revelation than all wisdom and philosophy.',
                source: 'Ludwig van Beethoven',
                tag: 'Music'
            }, {
                quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
                source: 'Anne Frank',
                citation: 'Tales from the Secret Annex',
                tag: 'Optimism'
            }, {
                quote: 'If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?',
                source: 'Albert Einstein',
                tag: 'Humor'
            }, {
                quote: 'The earth has music for those who listen.',
                source: 'Shakespeare',
                tag: 'Poetry'
            }
        ];

let useArray = [],
    quotesLength = quotes.length;


/*------------------
 Event Listeners
 -------------------*/
quote.addEventListener("click", printQuote, false);


/*------------------
 Functions
 -------------------*/

//generate random number
let generateRandomArrayNum = function(num){

    let randomNum = getRandomNum(quotesLength);

    if (!inArray(useArray, randomNum)) {
        //add to array if not there
        useArray.push(randomNum);
    } else {
        //generate a new random num if it's already in array
        generateRandomArrayNum(quotesLength);
    }
};

// test if current random number is in the array: return true or false
function inArray(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

//creates random number when needed
function getRandomNum(num) {
    return Math.floor(Math.random() * (num));
}

//creates random background hex values
function getHexValues() {
    let hexArr = ['0','1','2','3','4','5','6','7','9','a','b','c','d','e','f'],
        randomNum = getRandomNum(hexArr.length),
        hexResult = hexArr[randomNum];
    for(let i = 0; i < 5; i++) {

        randomNum = getRandomNum(hexArr.length);
        hexResult += hexArr[randomNum];
    }
    return "#" + hexResult;
}

//get random quote
function getRandomQuote() {

    generateRandomArrayNum();

    //use last item added to the array
    let randomNum = useArray[useArray.length - 1];

    //empty array if all items have been added
    if (useArray.length === quotesLength) {
        useArray = [];
        console.log('Quotes reset');
    }
    return quotes[randomNum];
}

//create quote to print to DOM
function printQuote() {
    let randomQuote,
        bgColorValues = getHexValues();


    quoteContainer.classList.remove("fadeIn");

    //timer for animation classes
    setTimeout(function () {
        randomQuote = (getRandomQuote());
        console.log('Quote: ' + randomQuote.quote);
        quoteContainer.innerHTML = html();
        setTimeout(function () {
            quoteContainer.classList.add("fadeIn");
            document.body.style.backgroundColor = bgColorValues;
            console.log('background color ' + bgColorValues);
        }, 50);

    }, 300);

    //generate html as template literal
    let html = function () {
        let htmlString = `
          <p class="quote">${randomQuote.quote}</p>
          <p class="source">
              ${randomQuote.source}`;
       
              if(randomQuote.citation) {
                htmlString +=`<span class="citation">${randomQuote.citation}</span>`;
              }
              if(randomQuote.year) {
                htmlString +=`<span class="year"> ${randomQuote.year} </span>`;
              }

              htmlString +=`<span class="tag"> ${randomQuote.tag} </span>
          </p>`;

              return htmlString;
    };
}

//run a new quote every 7sec
setInterval(function () {
    printQuote();
}, 7000);

//init quote on page load
printQuote();