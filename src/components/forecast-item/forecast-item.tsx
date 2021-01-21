import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconState, { WeatherState } from "../icon-state/icon-state";

export interface ForecastItemProps {
  weekDay: string;
  hour: number;
  state: WeatherState;
  temperature: number;
}

const ForecastItem: React.FC<ForecastItemProps> = ({
  weekDay,
  hour,
  state,
  temperature,
}) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
      <IconState state={state}></IconState>
      </Grid>
      <Grid item>
        <Typography>{temperature} °</Typography>
      </Grid>
    </Grid>
  );
};

export default ForecastItem;
