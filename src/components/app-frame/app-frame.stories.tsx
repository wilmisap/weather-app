import React from "react";
import "typeface-roboto";
import AppFrame from "./app-frame";
import { BrowserRouter as Router} from "react-router-dom";

export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      fsdfasdfasfd
    </AppFrame>
  </Router>
);
