import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");

  function showWeather(response) {
    console.log(response.data.main.temp);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "50c2acd53349fabd54f52b93c8650d37";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type your city.."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
