import React from 'react'
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";
import { IconContext } from "react-icons";

export type WeatherState = "cloud" | "cloudy" | "fog" | "sunny" | "rain";

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
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
