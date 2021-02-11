import React from "react";
import { render } from "@testing-library/react";
import Forecast from "./forecast";
import { ForecastItemProps } from "../forecast-item/forecast-item";

const forecast: ForecastItemProps[] = [
  { weekDay: "Lunes", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Martes", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Miercoles", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Jueves", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Viernes", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Sabado", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Domingo", hour: 10, state: "rain", temperature: 23 },
];

test("Forecast render", async () => {
  const { findAllByTestId } = render(<Forecast forecastItemList={forecast} />);

  const forecastItems = await findAllByTestId("forecast-item-container");

  expect(forecastItems).toHaveLength(7);
});
