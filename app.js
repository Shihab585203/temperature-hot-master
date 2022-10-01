// Do not use API Key on your JS files
const API_key = `cea645ccbd42a87893aaa5e8fbb7f9de`;

const loadTempareture = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  displayTemperature(data);
};

const displayTemperature = (data) => {
  //City Name
  setInnerTextById("city-name", data.name ? data.name : "Cannot city Found");

  //Temperature
  setInnerTextById("temperature", data.main.temp);

  //Weather Condition
  setInnerTextById("weather", data.weather[0].main);
};

//Utilities Function
const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

//call city name
const getCityName = (data) => {
  const inputField = document.getElementById("input-field");
  const cityTemp = inputField.value;
  loadTempareture(cityTemp);
};
