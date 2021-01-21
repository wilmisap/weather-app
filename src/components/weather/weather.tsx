import React from "react";
import Typography from "@material-ui/core/Typography";
import { IconContext } from "react-icons";
import IconState, { WeatherState } from "./../icon-state/icon-state";
import Grid from "@material-ui/core/Grid";

interface WeatherProps {
  temperature: string;
  state: WeatherState;
}

const Weather: React.FC<WeatherProps> = ({ temperature, state }) => {
  return (
    <Grid container item direction="row" justify="center" alignItems="center" spacing={1}>
      <IconContext.Provider value={{ size: "6em" }}>
        <IconState state={state}></IconState>
      </IconContext.Provider>
      <Typography display="inline" variant="h2">
        {temperature}
      </Typography>
    </Grid>
  );
};

export default Weather;
