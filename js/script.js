// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const quote = document.getElementById('loadQuote'),
      quoteContainer = document.getElementById('quote-box');


let quotes = [
    {
        quote: 'Quote 1',
        source: 'Source 1',
        citation: 'Citation 1',
        year: 'year 1'
    },{
        quote: 'Quote 2',
        source: 'Source 2',
        citation: 'Citation 2',
        year: 'year 2'
    },{
        quote: 'Quote 3',
        source: 'Source 3',
        citation: 'Citation 3',
        year: 'year 3'
    },{
        quote: 'Quote 4',
        source: 'Source 4',
        citation: 'Citation 4',
        year: 'year 4'
    },{
        quote: 'Quote 5',
        source: 'Source 5',
        citation: 'Citation 5',
        year: 'year 5'
    }
];

/*------------------
    Event Listeners
 -------------------*/
quote.addEventListener("click", printQuote, false);


/*------------------
     Functions
 -------------------*/

function getRandomQuote(){
    let randomNum = Math.floor(Math.random() * (quotes.length));
    // return randomNum;
    return quotes[randomNum];
}

function printQuote(){

    let randomQuote = (getRandomQuote());
    var html = `
          <p class="quote">${randomQuote.quote}</p>
          <p class="source">${randomQuote.source}
              <span class="citation">${randomQuote.citation}</span>
              <span class="year"> ${randomQuote.year} </span>
           </p>
    `;

    quoteContainer.innerHTML = html;

}