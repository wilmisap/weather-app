import React from "react";
import "typeface-roboto";
import Weather from "./weather";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherExampleCloud = () => (
  <Weather temperature="10" state="rain" />
);

export const WeatherExampleCloudy = () => (
  <Weather temperature="10" state="rain" />
);

export const WeatherExampleFog = () => <Weather temperature="10" state="rain" />;

export const WeatherExampleRain = () => (
  <Weather temperature="10" state="rain" />
);

export const WeatherExampleSunny = () => (
  <Weather temperature="5" state="rain" />
);
