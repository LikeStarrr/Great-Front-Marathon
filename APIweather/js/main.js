const UI = {
  INPUT_SEARCH: document.querySelector(".input-search"),
  BTN_SEARCH: document.querySelector(".btn-search"),  
};
const NOW = {
  TAB: document.querySelector(".tab_now"),  
  TEMPERATURE: document.querySelector(".temperature"),
  IMG_WEATHER: document.querySelector(".icon-weather"),
  LOCATION: document.querySelector(".now-location"),
  BTN_FAVORITE: document.querySelector(".btn-favorite"), 
}
 const DETAILS = {
  TAB: document.querySelector(".tab_details"),
  LOCATION: document.querySelector(".details-location"), 
  UL: document.querySelectorAll(".list-elem"),
 }
 const FORECAST = {
  TAB: document.querySelector(".tab_forecast"),
 }



UI.BTN_SEARCH.addEventListener("click", function () {
  getWeather();
});

function getWeather() {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const cityName = UI.INPUT_SEARCH.value;
  const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  //alert(url);
  fetch(url)
    .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(
          `Error ${response.status} - ${response.statusText}\nTry again!`
        );
      }
      return Promise.resolve(response);
    })
    .catch((err) => alert(err))
    .then((response) => response.json())
    .then((result) => {
      let weatherInfo = {
        Temperature: Math.round(result.main.temp) + "\u2103",
        "Feels like": Math.round(result.main.feels_like) + "\u2103",
        Weather: result.weather[0].main,
        Sunrise: getTimeFromUnix(result.sys.sunrise),
        Sunset: getTimeFromUnix(result.sys.sunset),
      };
     
      let srcWeatherImg = result.weather[0].icon;
      NOW.IMG_WEATHER.src = `http://openweathermap.org/img/wn/${srcWeatherImg}@2x.png`;
      let i = 0;
      for (let key in weatherInfo) {
        DETAILS.UL[i].textContent = `${key} : ${weatherInfo[key]} `;
        i++;
      }
      NOW.TEMPERATURE.textContent = Math.round(result.main.temp) + "\u2103";
      NOW.LOCATION.textContent = cityName;
      DETAILS.LOCATION.textContent = cityName;
    });
  UI.INPUT_SEARCH.value = "";
  NOW.TAB.classList.add(':target');
}

function getTimeFromUnix(timestamp) {
  let d = new Date(timestamp * 1000);
  timeStampCon = addZero(d.getHours()) + ":" + addZero(d.getMinutes());
  return timeStampCon;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
