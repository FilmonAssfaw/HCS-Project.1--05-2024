document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([51.505, -0.09], 20);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const marker = L.marker([51.5, -0.09]).addTo(map);

  const popupContent = `
    <div class="map__popup">
      <h2 class="map__popup-title">Marker Popup</h2>
      <p class="map__popup-description">This is a marker popup.</p>
    </div>
  `;

  marker.bindPopup(popupContent);

  marker.on("click", function () {
    const popup = document.querySelector(".map__popup");
    popup.classList.toggle("map__popup--hidden");
  });
});
