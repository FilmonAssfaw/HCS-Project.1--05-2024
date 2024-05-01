const apiKey = "6e20016a7bcb963f4843326fb4656e16";
const city = "Hamburg"; // Now London is the targeted city

const locationElement = document.querySelector(".weather-widget__location");
const temperatureElement = document.querySelector(
  ".weather-widget__temperature"
);
const descriptionElement = document.querySelector(
  ".weather-widget__description"
);

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const { name, main, weather } = data;
    locationElement.textContent = name;
    temperatureElement.textContent = `${Math.round(main.temp)}°C`;
    descriptionElement.textContent = weather[0].description;
  })
  .catch((error) => {
    console.log("Error fetching weather data:", error);
  });
