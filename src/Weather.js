import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setResult({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "",
    });
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

  let form = (
    <form onSubmit={handleSubmit} className="Search">
      <input
        type="search"
        placeholder="Type your city.."
        onChange={updateCity}
        class="search-form-input"
      />
      <button type="submit" class="search-form-button">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div>
          <div>
            Temperature in {city} is
            <br />{" "}
            <span class="weather-app-temperature">
              {Math.round(result.temperature)}
            </span>
            °C
          </div>
          <p>Description: {result.description}</p>
          <p>Humidity: {result.humidity}%</p>
          <p>Wind: {result.wind}km/h</p>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
