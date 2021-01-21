import React from "react";
import "typeface-roboto";
import WeatherDetails from "./weather-details"

export default {
  title: "WeatherDetails",
  component: WeatherDetails,
};

export const WeatherDetailsExample = () => <WeatherDetails humidity={10} wind={20} />;
 