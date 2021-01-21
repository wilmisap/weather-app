import React from "react";
import { render } from "@testing-library/react";
import Weather from "./weather"; //SUT: subject under

test("Weather render", async () => {
  // AAA

  const temperature = "10";

  const { findByRole } = render(
    <Weather temperature={temperature} state="sunny" />
  );

  const temp = await findByRole("heading");

  expect(temp).toHaveTextContent(temperature);
});
