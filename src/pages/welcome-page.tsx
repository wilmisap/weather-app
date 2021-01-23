import { Grid, Typography, Link } from "@material-ui/core";
import React from "react";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { Link as RouterLink } from "react-router-dom";
import WelcomeScreen from "../components/welcome-screen/welcome-screen";
import { RoutesPath } from "../config/routes";

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid container direction="column" justify="center" className="full">
        <div className="highlight">
          <Grid item container xs={12} justify="center" alignItems="center">
            <Grid item>
              <IconContext.Provider value={{ size: "6em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Weather App
              </Typography>
              <Link
                color="inherit"
                arial-label="menu"
                component={RouterLink}
                to={RoutesPath.main}
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
