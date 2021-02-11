import React from 'react'
import {
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiRaindrop,
  WiThunderstorm
} from "react-icons/wi";
import { IconContext } from "react-icons";  

export type WeatherState = "clouds" | "clear" | "rain" | "snow" | "drizzle" | "thunderstorm";

const stateByName = {  
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle:WiRaindrop,
  thunderstorm: WiThunderstorm ,

};

interface IconStateProps {
  state: WeatherState;
}

const renderState = (state: WeatherState) => {
  const IconState = stateByName[state];

  return <IconState />;
};

const IconState: React.FC<IconStateProps> = ({state}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "5em" }}>
        {renderState(state)}
      </IconContext.Provider>      
    </>
  )
}

export default IconState
