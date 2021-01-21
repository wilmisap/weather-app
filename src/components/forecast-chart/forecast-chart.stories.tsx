import React from "react";
import Forecast from "../forecast/forecast";
import ForecastChart, { ForecastChartType } from "./forecast-chart";

export default {
  title: "ForecastChart",
  component: ForecastChart,
};

const data: ForecastChartType[] = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

export const ForecastChartExample = () => <ForecastChart data={data} />;
