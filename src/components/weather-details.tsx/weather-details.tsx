import React from "react";
import Typography from "@material-ui/core/Typography";

interface WeatherDetailsProps {
  humidity: number;
  wind: number;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ humidity, wind }) => {
  return (
    <>
      <Typography>Humedad: {humidity}%</Typography>
      <Typography>Viento: {wind} km/h</Typography>
    </>
  );
};

export default WeatherDetails;
