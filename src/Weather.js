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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type your city.."
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(result.temperature)} °C</li>
          <li>Description: {result.description}</li>
          <li>Humidity: {result.humidity}%</li>
          <li>Wind: {result.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
