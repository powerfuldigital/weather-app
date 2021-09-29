function formatDate (timestamp){
  let date = new Date (timestamp);
  let hours = date.getHours();
  if (hours < 10){hours= `0${hours}`;}
  let minutes = date.getMinutes();
  if (minutes < 10){minutes= `0${minutes}`;}
  let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day= days[date.getDay()];
  return `${day} ${hours}:${minutes}`;

}

function displayForecast (response)
{console.log(response.data.daily);
  let forecastElement= document.querySelector ("#weather-forecast");
let forecastHTML= `<div class="row">`;
let days= ["Thu", "Fri","Sat", "Sun", "Mon", "Tue"];
days.forEach(function (day){forecastHTML= 
  forecastHTML + `
  <div class="col-2">
  <div id="weather-forecast-date">${day}</div>
  <img 
  src="https://openweathermap.org/img/wn/04d@2x.png" 
  alt="cloudy" 
  width="36"/>
  <div>
  <span id="forecast-max-temperature">14º </span>
  <span id="forecast-min-temperature">8º</span>
  </div>
  </div>
  `;});

forecastHTML= forecastHTML + `</div>`;

forecastElement.innerHTML= forecastHTML}

function getForecast (coordinates) {
  let apiKey ="b9ba0314a93083136d968577c718e31d";
let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayForecast);}

function displayTemperature (response){
let cityElement= document.querySelector ("#city");
let temperatureELement=document.querySelector ("#temperature");
let highElement=document.querySelector ("#highTemp");
let lowElement= document.querySelector ("#lowTemp");
let windElement= document.querySelector ("#wind");
let humidityElement = document.querySelector ("#humidity");
let dateElement= document.querySelector ("#current-day-time");
let iconElement= document.querySelector ("#icon");
let descriptionElement= document.querySelector ("#description");
celsiusTemperature= response.data.main.temp;
cityElement.innerHTML=(response.data.name);
temperatureELement.innerHTML= Math.round(celsiusTemperature);
highElement.innerHTML= Math.round(response.data.main.temp_max);
lowElement.innerHTML= Math.round(response.data.main.temp_min);
windElement.innerHTML= Math.round(response.data.wind.speed);
humidityElement.innerHTML=(response.data.main.humidity);
dateElement.innerHTML= formatDate (response.data.dt * 1000);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
descriptionElement.innerHTML= response.data.weather[0].description;

getForecast (response.data.coord);
}

function search (city) {let apiKey ="b9ba0314a93083136d968577c718e31d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);}

function handleSubmit (event){event.preventDefault();
let cityInputElement= document.querySelector("#city-input");
search (cityInputElement.value);
}

function showFahrenheitTemperature (event){event.preventDefault();
let temperatureELement= document.querySelector ("#temperature");
celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheitTemperature= (celsiusTemperature*9)/5+32;
temperatureELement.innerHTML= Math.round(fahrenheitTemperature);}

function showCelsiusTemperature (event)
{event.preventDefault();
celsiusLink.classList.add("active");
fahrenheitLink.classList.remove("active");
let temperatureElement= document.querySelector ("#temperature");
temperatureElement.innerHTML= Math.round(celsiusTemperature);
}

let celsiusTemperature= null;

let formElement= document.querySelector ("#search-form");
formElement.addEventListener ("submit", handleSubmit);

let fahrenheitLink= document.querySelector ("#fahrenheit-link");
fahrenheitLink.addEventListener ("click", showFahrenheitTemperature);

let celsiusLink= document.querySelector ("#celsius-link");
celsiusLink.addEventListener ("click", showCelsiusTemperature);


search("Canberra");

displayForecast();










