import React from "react";
import "typeface-roboto";
import CityInfo from "./city-info";

export default {
  title: "CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={"Buenos Aires"} country={"Argentina"} />
);
