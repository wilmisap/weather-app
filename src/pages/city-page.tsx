import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/city-info/city-info";
import Weather from "./../components/weather/weather";
import WeatherDetails from "./../components/weather-details/weather-details";
import ForecastChart, {
  ForecastChartType,
} from "./../components/forecast-chart/forecast-chart";
import Forecast from "./../components/forecast/forecast";
import { ForecastItemProps } from "../components/forecast-item/forecast-item";
import AppFrame from "../components/app-frame/app-frame";

const dataExample: ForecastChartType[] = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const forecastItemListExample: ForecastItemProps[] = [
  { weekDay: "Lunes", hour: 10, state: "sunny", temperature: 23 },
  { weekDay: "Martes", hour: 10, state: "cloud", temperature: 23 },
  { weekDay: "Miercoles", hour: 10, state: "cloudy", temperature: 23 },
  { weekDay: "Jueves", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Viernes", hour: 10, state: "fog", temperature: 23 },
  { weekDay: "Sabado", hour: 10, state: "rain", temperature: 23 },
  { weekDay: "Domingo", hour: 10, state: "sunny", temperature: 23 },
];

const CityPage = () => {
  const city = "Buenos Aires";
  const country = "Argentina";
  const state = "cloudy";
  const temperature = "20";
  const humidity = 80;
  const wind = 5;
  const data: ForecastChartType[] = dataExample;
  const forecastItemList: ForecastItemProps[] = forecastItemListExample;

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>
          <ForecastChart data={data} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
