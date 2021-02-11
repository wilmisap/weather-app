import React from "react";
import "typeface-roboto";
import CityList from "./city-list";
import { action } from "@storybook/addon-actions"

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Buenos Aires ", country: "Argentina", countryCode: "AB" },
  { city: "Bogota", country: "Colombia", countryCode: "CO" },
  { city: "Madrid", country: "Espana", countryCode: "ES" },
  { city: "Ciudad de Mexico", country: "Mexico", countryCode: "ME" },
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}  />;