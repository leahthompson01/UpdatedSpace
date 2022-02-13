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

//api

document.addEventListener("DOMContentLoaded", function (){
    sendApiRequest();
});

async function sendApiRequest(){
    let API_KEY = "gLb4SvAYPcKkNi2DIdgXgeDJaUn6uD5xgs17ugq";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=7gLb4SvAYPcKkNi2DIdgXgeDJaUn6uD5xgs17ugq&count=16`);
    console.log(response);
    let data = await response.json();
    console.log(data);
  
    for (let i=1; i<9; i++){
        let num=i;
        if (data[num].media_type=="video"){
            data[num].splice(i, 1);
              }
        useApiData(data, num);
        }
}

function useApiData(data,num){
document.querySelector(`#carousel-image-${num}-link`).href = data[num].url;
document.querySelector(`#carousel-image-${num}`).src = data[num].url;
document.querySelector(`#carousel-title-${num}`).innerHTML= data[num].title;

document.querySelector(`#carousel-info-${num}`).innerHTML= shorten(data[num].explanation);
}

function shorten(str){
var length = 100;
 if (str.length > length){ 
                    return str.substring(0, length - 3) + "..." }
                  
}
/*  for (let i=0; i<data.length; i++){
        if (data.media_type != "image"){
        data.splice(i, 1);
        }}*/