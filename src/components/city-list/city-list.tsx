import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CityInfo, { City } from "./../city-info/city-info";
import Weather from "./../weather/weather";

interface CityListProps {
  cities: City[];
  onClickCity: () => void;
}

const renderCityAndCountry = (eventOnClickCity: () => void) => {
  const renderCityAndCountryInternal = (cityAndCountry: City) => {
    const { city, country } = cityAndCountry;
    return (
      <ListItem key={`${city}-${country}`} onClick={() => eventOnClickCity()}>
        <Grid container justify="center" alignItems="center">
          <Grid item md={8} xs={12}>
            <CityInfo city={city} country={country} />;
          </Grid>
          <Grid item md={4} xs={12}>
            <Weather temperature="10" state="sunny" />
          </Grid>
        </Grid>
      </ListItem>
    );
  };
  return renderCityAndCountryInternal ;
};

const CityList: React.FC<CityListProps> = ({ cities, onClickCity }) => {
  const funcAux = renderCityAndCountry(onClickCity);
  return <List>{cities.map((cityAndCountry) => funcAux(cityAndCountry))}</List>;
};

export default CityList;
