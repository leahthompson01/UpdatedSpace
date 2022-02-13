document.addEventListener("DOMContentLoaded", function (){
    sendApiRequest();
});

async function sendApiRequest(){
    
    let response = await fetch(`https://fdo.rocketlaunch.live/json/launches/next/5`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    for (let i=0; i<5; i++){
        let num = i;
        useApiData(data, num);
        
}}
function useApiData(data,num){
    document.querySelector(`#launch-title-${num}`).innerHTML = data.result[num].name;
    document.querySelector(`#launch-date-${num}`).innerHTML = data.result[num].date_str;
    document.querySelector(`#launch-info-${num}`).innerHTML= data.result[num].launch_description;
    let spaceCenter=data.result[num].pad.location.name;
    let countryOf=data.result[num].pad.location.country;
    document.querySelector(`#launch-pad-${num}`).innerHTML= `${spaceCenter}, ${countryOf}`;
    if (data.result[num].weather_summary == null){
        document.querySelector(`#launch-weather-summary-${num}`).innerHTML = "";
    }
    else{
        let weather = data.result[num].weather_summary
    document.querySelector(`#launch-weather-summary-${num}`).innerHTML = `Weather: ${weather}`;
}
    
};