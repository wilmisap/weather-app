import React from "react";
import Grid from "@material-ui/core/Grid";
import ForecastItem, {
  ForecastItemProps,
} from "../forecast-item/forecast-item";

interface ForecastProps {
  forecastItemList: ForecastItemProps[];
}

const renderForecastItem = ({
  weekDay,
  hour,
  state,
  temperature,
}: ForecastItemProps) => {
  return (
    <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
      <ForecastItem
        weekDay={weekDay}
        hour={hour}
        state={state}
        temperature={temperature}
      ></ForecastItem>
    </Grid>
  );
};

const Forecast: React.FC<ForecastProps> = ({ forecastItemList }) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      {forecastItemList.map((forecast) => renderForecastItem(forecast))}
    </Grid>
  );
};

export default Forecast;
