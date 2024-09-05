import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type your city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
