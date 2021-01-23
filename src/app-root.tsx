import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/welcome-page";
import CityPage from "./pages/city-page";
import MainPage from "./pages/main-page";
import NotFoundPage from "./pages/not-found-page";
import { RoutesPath } from "./config/routes";

const AppRoot = () => {
  return (
    <Router>
        <Switch>
          <Route exact path={RoutesPath.welcome}>
            <WelcomePage />
          </Route>
          <Route path={RoutesPath.main}>
            <MainPage />
          </Route>
          <Route path={RoutesPath.city}>
            <CityPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
  );
};

export default AppRoot;
