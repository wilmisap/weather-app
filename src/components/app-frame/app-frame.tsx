import {
  AppBar,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";

const AppFrame: React.FC = ({ children }) => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" arial-label="menu">
            <Link
              component={LinkRouter}
              to="/main"
              color="inherit"
              arial-label="menu"
            >
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AppFrame;
