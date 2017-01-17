"use strict";

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//add 10 sec timer
//random background


const quote = document.getElementById('loadQuote'),
      quoteContainer = document.getElementById('quote-box'),
      quoteTxt = document.getElementsByClassName('quote'),
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
let generateRandomNum = function(num){

    let randomNum = Math.floor(Math.random() * (num))

    if (!inArray(useArray, randomNum)) {
        //add to array if not there
        useArray.push(randomNum);
    } else {
        //generate a new random num if it's already in array
        generateRandomNum(quotesLength);
    }
};

// test if current random number is in the array: return true or false
function inArray(arr, val) {
    //debugger
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
};


//get random quote
function getRandomQuote() {

    generateRandomNum(quotesLength);

    //use last item added to the array
    let randomNum = useArray[useArray.length - 1];

    //empty array if all items have been added
    if (useArray.length === quotesLength) {
        useArray = [];
    }
    return quotes[randomNum];
}

//create quote to print to DOM
function printQuote() {
    let randomQuote;

    quoteContainer.classList.remove("fadeIn");

    setTimeout(function () {
        // debugger
        randomQuote = (getRandomQuote());
        console.log('Quote: ' + randomQuote.quote);
        quoteContainer.innerHTML = html();
        setTimeout(function () {
            quoteContainer.classList.add("fadeIn");
        }, 50);

    }, 300);



    //make call for a random quote
    // let randomQuote = (getRandomQuote());

    //generate html as template literal
    let html = function () {
        let htmlString = `
          <p class="quote">${randomQuote.quote}</p>
          <p class="source">
              ${randomQuote.source}`
       
              if(randomQuote.citation) {
                htmlString +=`<span class="citation">${randomQuote.citation}</span>`;
              }
              if(randomQuote.year) {
                htmlString +=`<span class="year"> ${randomQuote.year} </span>`;
              }

              htmlString +=`<span class="tag"> ${randomQuote.tag} </span>
          </p>`

              return htmlString;

    }
    // var html = `
    //       <p class="quote">${randomQuote.quote}</p>
    //       <p class="source">
    //           ${randomQuote.source}
    //           <span class="citation">${randomQuote.citation}</span>
    //           <span class="year"> ${randomQuote.year} </span>
    //       </p>
    // `;
    // quoteContainer.innerHTML = html();
}

setInterval(function () {
    printQuote();
}, 4000);

//init quote on page load
printQuote();