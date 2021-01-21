import React from "react";
import { render } from "@testing-library/react";
import WeatherDetails from "./weather-details";

test("WeatherDetails render", async () => {
  const { findByText } = render(<WeatherDetails humidity={10} wind={20} />);

  const wind = await findByText(/20/);

  const humidity = await findByText(/10/);

  expect(wind).toHaveTextContent("Viento: 20 km/h");
  expect(humidity).toHaveTextContent("Humedad: 10%");
});
