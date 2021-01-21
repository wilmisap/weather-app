import React from "react";
import "typeface-roboto";
import CityList from "./city-list";
import { action } from "@storybook/addon-actions"

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Buenos Aires ", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
  { city: "Madrid", country: "Espana" },
  { city: "Ciudad de Mexico", country: "Mexico" },
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}  />;