const UI_ELEMENTS = {
  INPUT_SEARCH: document.querySelector(".input-search"),
  BTN_SEARCH: document.querySelector(".btn-search"),
  BTN_FAVORITE: document.querySelector(".btn-favorite"),
  TAB_NOW: document.querySelector(".tab_now"),
  TAB_DETAILS: document.querySelector(".tab_details"),
  TAB_FORECAST: document.querySelector(".tab_forecast"),
  UL_DETAILS: document.querySelectorAll(".list-elem"),
};

UI_ELEMENTS.BTN_SEARCH.addEventListener("click", function () {
  getWeather();
});

function getWeather() {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const cityName = "boston";
  const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  alert(url);
  fetch(url)
    .then((response) => response.json())
    .then((result) => {        
      if (result.main.temp === null) {
        alert(`Location is not found.`);
      } else {
        let weatherInfo = {
        "Temperature": result.main.temp + '\u2103;',
        "Feels like": result.main.feels_like + '\u2103;',
        "Weather": result.weather[0].main,
        "Sunrise" : getTimeFromUnix(+result.sys.sunrise - result.timezone),
        "Sunset": getTimeFromUnix(+result.sys.sunset - result.timezone)
        }            
        let i=0;
        for (let key in weatherInfo) {
            UI_ELEMENTS.UL_DETAILS[i].textContent = `${key} : ${weatherInfo[key]} `;
            i++;
        }            
      } 
    })
    .catch(() => alert("Server error!"));
}

function getTimeFromUnix(timestamp) {
    let d = new Date(timestamp*1000);
    timeStampCon = addZero(d.getHours()) + ':' + addZero(d.getMinutes());
    return timeStampCon;
};

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
