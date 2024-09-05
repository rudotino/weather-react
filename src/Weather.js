import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  function handleResponse(response) {
    alert(`the weather is New York is ${response.data.main.temp}°C`);
  }
  let apiKey = "50c2acd53349fabd54f52b93c8650d37";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="black"
      size={100}
      animate={true}
    />
  );
}
