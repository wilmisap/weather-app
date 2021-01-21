import React from "react";
import Typography from "@material-ui/core/Typography";
import IconState, { WeatherState } from "./../icon-state/icon-state"

interface WeatherProps {
  temperature: string;
  state: WeatherState;
}

const Weather: React.FC<WeatherProps> = ({ temperature, state }) => {
  return (
    <>
      <IconState state={state}></IconState>
      <Typography display="inline" variant="h3">
        {temperature}
      </Typography>
    </>
  );
};

export default Weather;
