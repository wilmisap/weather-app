import React from "react";
import "typeface-roboto";
import ForecastItem from "./forecast-item";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const LunesSoleado = () => (
  <ForecastItem weekDay="Lunes" hour={10} state="sunny" temperature={23} />
);
