import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./city-list";

const cities = [
  { city: "Buenos Aires ", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
  { city: "Madrid", country: "Espana" },
  { city: "Ciudad de Mexico", country: "Mexico" },
];
const fnClickOnItem = jest.fn();

test("CityList render", async () => {
  //AAA
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const temp = await findAllByRole("button");

  expect(temp).toHaveLength(cities.length);
});

test("CityList click on item", async () => {
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("button");

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
