function displayTemperature (response){
let cityElement= document.querySelector ("#city");
let temperatureELement=document.querySelector ("#temperature");
let highElement=document.querySelector ("#highTemp");
let lowElement= document.querySelector ("#lowTemp");
let windElement = document.querySelector ("#wind");
let humidityElement = document.querySelector ("#humidity");
cityElement.innerHTML=(response.data.name);
temperatureELement.innerHTML= Math.round(response.data.main.temp);
highElement.innerHTML= Math.round(response.data.main.temp_max);
lowElement.innerHTML= Math.round(response.data.main.temp_min);
windElement.innerHTML= Math.round(respone.data.wind.speed);
humidityElement.innerHTML=(response.data.main.humidity);
}
let apiKey ="b9ba0314a93083136d968577c718e31d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Frankfurt&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature);




