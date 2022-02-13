function getWeatherReport(city) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch(`https://api.maas2.apollorion.com/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("terrestrial_date").innerHTML =
          result.terrestrial_date;
        document.getElementById(
          "temp"
        ).innerHTML = `max ${result.max_temp} &#8451;, min ${result.min_temp} &#8451;`;
        document.getElementById("weather").innerHTML = result.atmo_opacity;
        document.getElementById("season").innerHTML = result.season;
        document.getElementById("sunrise").innerHTML = result.sunrise;
        document.getElementById("sunset").innerHTML = result.sunset;
      })
      .catch((error) => console.log("error", error));
  }