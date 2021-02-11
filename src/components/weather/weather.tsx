import React from "react";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { IconContext } from "react-icons";
import IconState, { WeatherState } from "./../icon-state/icon-state";
import Grid from "@material-ui/core/Grid";

export interface WeatherProps {
  temperature: string;
  state: WeatherState;
}

const Weather: React.FC<WeatherProps> = ({ temperature, state }) => {
  return (
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <IconContext.Provider value={{ size: "6em" }}>
        {state ? (
          <IconState state={state}></IconState>
        ) : (
          <Skeleton variant="circle" height={80} width={80}></Skeleton>
        )}
      </IconContext.Provider>
      {temperature ? (
        <Typography display="inline" variant="h2">
          {temperature}
        </Typography>
      ) : (
        <Skeleton variant="rect" height={80} width={80}></Skeleton>
      )}
    </Grid>
  );
};

export default Weather;
