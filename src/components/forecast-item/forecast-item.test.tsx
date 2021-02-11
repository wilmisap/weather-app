import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from "./forecast-item";

test("ForecastItem render", async () => {
  const { findByText } = render(
    <ForecastItem weekDay="Lunes" hour={10} state="rain" temperature={23} />
  );

  const weekDay = await findByText(/Lunes/);

  const hour = await findByText(/10/);

  //const state = await findByI("sunny");

  const temperature = await findByText(/23/);

  expect(weekDay).toHaveTextContent("Lunes");
  expect(hour).toHaveTextContent("10");
  //expect(state).toHaveTextContent("sunny");
  expect(temperature).toHaveTextContent("23 °");
});
