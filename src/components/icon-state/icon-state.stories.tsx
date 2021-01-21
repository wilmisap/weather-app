import React from "react";
import "typeface-roboto";
import IconState from "./icon-state";

export default {
  title: "IconState",
  component: IconState,
};

export const IconStateExampleCloud = () => <IconState state="cloud" />;

export const IconStateExampleCloudy = () => <IconState state="cloudy" />;

export const IconStateExampleFog = () => <IconState state="fog" />;

export const IconStateExampleRain = () => <IconState state="rain" />;

export const IconStateExampleSunny = () => <IconState state="sunny" />;
