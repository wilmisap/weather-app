import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { RoutesPath } from "../config/routes";
import CityList from './../components/city-list/city-list'

const cities = [
  { city: "Buenos Aires ", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
  { city: "Madrid", country: "Espana" },
  { city: "Ciudad de Mexico", country: "Mexico" },
];

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(RoutesPath.city);
  };
  return (
    <div>
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
  ); 
};

export default MainPage;
