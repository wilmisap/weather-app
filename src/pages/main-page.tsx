import { Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "../components/app-frame/app-frame";
import { RoutesPath } from "../config/routes";
import CityList from "./../components/city-list/city-list";

const cities = [
  { city: "Buenos Aires ", country: "Argentina", countryCode: "AR"},
  { city: "Bogota", country: "Colombia", countryCode: "CO" },
  { city: "Madrid", country: "Espana", countryCode: "ES" },
  { city: "Ciudad de Mexico", country: "Mexico", countryCode: "MX" },
];

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = (city: string, countryCode: string) => {
    console.log('city', city);
    console.log('countryCode', countryCode)
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
