const UI = {
  INPUT_SEARCH: document.querySelector(".input-search"),
  BTN_SEARCH: document.querySelector(".btn-search"),
  BTN_FAVORITE: document.querySelector(".btn-favorite"),
  IMG_FAVORITE: document.querySelector(".btn-favorite"),
  TAB_NOW: document.querySelector(".tab_now"),
  TAB_DETAILS: document.querySelector(".tab_details"),
  TAB_FORECAST: document.querySelector(".tab_forecast"),
  UL_DETAILS: document.querySelectorAll(".list-elem"),
  TEMPERATURE_NOW: document.querySelector(".temperature"),
  IMG_WEATHER_NOW: document.querySelector(".icon-weather"),
  LOCATION_NOW: document.querySelector(".now-location"),
  LOCATION_DETAILS: document.querySelector(".details-location"),
};

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
      UI.IMG_WEATHER_NOW.src = `http://openweathermap.org/img/wn/${srcWeatherImg}@2x.png`;
      let i = 0;
      for (let key in weatherInfo) {
        UI.UL_DETAILS[i].textContent = `${key} : ${weatherInfo[key]} `;
        i++;
      }
      UI.TEMPERATURE_NOW.textContent = Math.round(result.main.temp) + "\u2103";
      UI.LOCATION_NOW.textContent = cityName;
      UI.LOCATION_DETAILS.textContent = cityName;
    });
  UI.INPUT_SEARCH.value = "";
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
