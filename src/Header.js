import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Header() {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="orange"
      size={80}
      animate={true}
    />
  );
}
