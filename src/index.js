function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = addZero(now.getMinutes());
  let currentDate = document.querySelector("#current-day-time");
  currentDate.innerHTML = `${day} ${hour}:${minute}`;
  
  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#find-city-value");
    cityElement.innerHTML = cityInput.value;
    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  let searchForm = document.querySelector("#find-city");
  searchForm.addEventListener("submit", search);
  
  function displayWeatherCondition(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}ºC`;
  }
  
  function displayPositionWeather(weather) {
    let temp = Math.round(weather.data.main.temp);
    let weatherDisplay = document.querySelector("#temperature");
    weatherDisplay.innerHTML = `${temp}`;
    let newLocation = weather.data.name;
    let displayLocation = document.querySelector("#city");
    displayLocation.innerHTML = `${newLocation}`;
  }
  
  function findPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiCoordUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiCoordUrl).then(displayPositionWeather);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(findPosition);
  }
  
  let currentPosition = document.querySelector("#current-location-button");
  currentPosition.addEventListener("click", getCurrentPosition);
  