import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import WelcomePage from "./pages/welcome-page";
import CityPage from "./pages/city-page";
import MainPage from "./pages/main-page";
import NotFoundPage from "./pages/not-found-page";
import { RoutesPath } from "./config/routes";

const AppRoot = () => {
  return (
    <Grid container justify="center" direction="row">
      <Grid item xs={12} sm={11} md={10} lg={8}>
      <h1>AppRoot</h1>
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
      </Grid>
    </Grid>
  );
};

export default AppRoot;
