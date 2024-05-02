const apiKey = "6e20016a7bcb963f4843326fb4656e16";
const city = "Cairo";

const locationElement = document.querySelector(".weather-widget__location");
const temperatureElement = document.querySelector(
  ".weather-widget__temperature"
);
const descriptionElement = document.querySelector(
  ".weather-widget__description"
);

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=6e20016a7bcb963f4843326fb4656e16&units=metric`;

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

document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([30.0594627, 31.17589], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const marker = L.marker([30.0594627, 31.17589]).addTo(map);

  const popupContent = `
      <div class="map__popup">
        <h2 class="map__popup-title">Cairo</h2>
        <p class="map__popup-description">I invented Pyramids.</p>
      </div>
    `;

  marker.bindPopup(popupContent);

  marker.on("click", function () {
    const popup = document.querySelector(".map__popup");
    popup.classList.toggle("map__popup--hidden");
  });
});
