// 👨‍🏫 Your task
// In your project, when a user searches for a city (example: New York),
//it should display the name of the city on the result page and the current temperature of the city.

// Please note: there's no need to include a temperature conversion at the moment. This will be taught later on in the course.

function typeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-field-input");
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCity);
  axios.get(apiUrl).then(showTemp);
  axios.get(apiUrl).then(showHumidity);
  axios.get(apiUrl).then(showFeelsLike);
  // axios.get(apiUrl).then(displayWeatherCondition);
}

function showCity(response) {
  let city = response.data.name;
  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${city}`;
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempInCity = document.querySelector("#temperature");
  tempInCity.innerHTML = `${temperature} °C`;
}

function showHumidity(response) {
  let humidity = response.data.main.humidity;
  let humidityInCity = document.querySelector("#humidity");
  humidityInCity.innerHTML = `Humidity: ${humidity}%`;
}

function showFeelsLike(response) {
  let feelsLike = Math.round(response.data.main.feels_like);
  let feelsLikeInCity = document.querySelector("#feels-like");
  feelsLikeInCity.innerHTML = `Feels like: ${feelsLike} °C`;
}

function showCurrentCity(response) {
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = `${response.data.name}`;
}

let searchForm = document.querySelector("#search-field");
searchForm.addEventListener("submit", typeCity);

let currentTimeButton = document.querySelector("#current-location-button");
currentTimeButton.addEventListener("click", showCurrentInfo);

function showCurrentInfo(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentInfo);
}

function searchCurrentInfo(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentCity);
  axios.get(apiUrl).then(showTemp);
  axios.get(apiUrl).then(showHumidity);
  axios.get(apiUrl).then(showFeelsLike);
}

// 🙀 Bonus point:
// Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city
// and current temperature using the OpenWeather API.

// function displayWeatherCondition(response) {
//   document.querySelector("#city").innerHTML = response.data.name;
//   document.querySelector("#temperature").innerHTML = Math.round(
//     response.data.main.temp
//   );
//   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
// }
