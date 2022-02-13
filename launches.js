document.addEventListener("DOMContentLoaded", function (){
    sendApiRequest();
});

async function sendApiRequest(){
    
    let response = await fetch(`https://fdo.rocketlaunch.live/json/launches/next/5`);
    console.log(response);
    let data = await response.json();
    console.log(data);
}
    /*for (let i=1; i<6; i++){

        useApiData(data);
        
}
*/
