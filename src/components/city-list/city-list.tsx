import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import convertUnits from "convert-units";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CityInfo, { City } from "./../city-info/city-info";
import Weather, { WeatherProps } from "./../weather/weather";

const getCityCode = (city: string, countryCode: string) =>
  `${city}-${countryCode}`;
interface CityListProps {
  cities: City[];
  onClickCity: (city: string, countryCode: string) => void;
}

const renderCityAndCountry = (eventOnClickCity: (city: string, countryCode: string) => void) => {
  const renderCityAndCountryInternal = (
    cityAndCountry: City,
    weather: WeatherProps
  ) => {
    const { city, country, countryCode } = cityAndCountry;
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={() => {
          return eventOnClickCity(city, countryCode);
        }}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} country={country} countryCode={countryCode} />
            ;
          </Grid>
          <Grid item md={3} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  };
  return renderCityAndCountryInternal;
};
type AllWeather = { [k: string]: WeatherProps };
const CityList: React.FC<CityListProps> = ({ cities, onClickCity }) => {
  const [allWeather, setallWeather] = useState<AllWeather>({});
  const [error, setError] = useState("");

  const setWeather = async (city: string, countryCode: string) => {
    const apiId = "4e487e5ea76c32c85a8f5fcfabecd13a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiId}`;
    try {
      const response = await axios.get(url);
      const { data } = response;
      const temperature =
        convertUnits(data.main.temp).from("K").to("C").toFixed(0).toString() ||
        "";
      const state = data.weather[0].main.toLowerCase();
      const propName = getCityCode(city, countryCode);
      const propValue: WeatherProps = { temperature, state };
      setallWeather((allWeather) => ({
        ...allWeather,
        [propName]: propValue,
      }));
    } catch (error) {
      if (error.response) {
        const { data, status } = error.response;
        setError("Ha ocurrido un error en el servidor del clima");
      } else if (error.request) {
        setError("Verifique la conexion a Internet");
      } else {
        setError("Error al cargar los datos");
      }
    }
  };

  useEffect(() => {
    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);
  const funcAux = renderCityAndCountry(onClickCity);
  return (
    <div>
      {error && (
        <Alert
          onClose={() => {
            setError("");
          }}
          severity="error"
        >
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          funcAux(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};

export default CityList;
