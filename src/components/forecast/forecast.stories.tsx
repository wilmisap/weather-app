import React from "react";
import "typeface-roboto";
import { ForecastItemProps } from "../forecast-item/forecast-item";
import Forecast from "./forecast";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecast: ForecastItemProps[] = [
  { weekDay:"Lunes", hour:10, state:"rain", temperature:23},
  { weekDay:"Martes", hour:10, state:"rain", temperature:23},
  { weekDay:"Miercoles", hour:10, state:"rain", temperature:23},
  { weekDay:"Jueves", hour:10, state:"rain", temperature:23},
  { weekDay:"Viernes", hour:10, state:"rain", temperature:23},
  { weekDay:"Sabado", hour:10, state:"rain", temperature:23},
  { weekDay:"Domingo", hour:10, state:"rain", temperature:23}
];

export const forecastExample = () => <Forecast forecastItemList={forecast}  />;