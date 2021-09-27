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

function displayTemperature (response){
let cityElement= document.querySelector ("#city");
let temperatureELement=document.querySelector ("#temperature");
let highElement=document.querySelector ("#highTemp");
let lowElement= document.querySelector ("#lowTemp");
let windElement= document.querySelector ("#wind");
let humidityElement = document.querySelector ("#humidity");
let dateElement= document.querySelector ("#current-day-time");
let iconElement= document.querySelector ("#icon");
cityElement.innerHTML=(response.data.name);
temperatureELement.innerHTML= Math.round(response.data.main.temp);
highElement.innerHTML= Math.round(response.data.main.temp_max);
lowElement.innerHTML= Math.round(response.data.main.temp_min);
windElement.innerHTML= Math.round(response.data.wind.speed);
humidityElement.innerHTML=(response.data.main.humidity);
dateElement.innerHTML= formatDate (response.data.dt * 1000);
iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey ="b9ba0314a93083136d968577c718e31d";
let city = "Sydney";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);









