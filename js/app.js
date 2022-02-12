//fun fact rotation

(function () {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(10000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
});