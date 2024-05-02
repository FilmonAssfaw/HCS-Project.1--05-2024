document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;

  console.log("City: " + city);
  console.log("Country: " + country);

  alert("You entered:\nCity: " + city + "\nCountry: " + country);
});
