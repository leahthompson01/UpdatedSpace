// (function() {
//   var quotes = document.getElementsByClassName("quotes");
//   var quoteIndex = -1;

//   function showNextQuote() {
//     ++quoteIndex;
//     quotes.eq(quoteIndex % quotes.length)
//       .fadeIn(2000)
//       .delay(12000)
//       .fadeOut(2000, showNextQuote);
//   }

//   showNextQuote();
// })();

const titles = [
  'Draco',
  'Andromeda'
]

const paragraphs = [
  'This constellation is..',
  'The Andromeda constellation'
]

function getRandomQuote() {
  const quoteIndex = Math.floor(Math.random() * titles.length)
  const paragraph = paragraphs[quoteIndex]
  const title = titles[quoteIndex]
  console.log(quoteIndex)
}

getRandomQuote()