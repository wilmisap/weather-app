import React from "react";
import Typography from "@material-ui/core/Typography";

export interface City {
  city: string;
  country: string;
  countryCode: string;
}

const CityInfo: React.FC<City> = ({ city, country, }) => {
  return (
    <>
      <Typography display="inline" variant="h4">
        {city},{" "}
      </Typography>
      <Typography display="inline" variant="h6">
        {country}
      </Typography>
    </>
  );
};

export default CityInfo;
