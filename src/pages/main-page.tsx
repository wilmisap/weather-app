import { Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppFrame from "../components/app-frame/app-frame";
import { RoutesPath } from "../config/routes";
import CityList from "./../components/city-list/city-list";

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
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
