import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appBar: {
    backgroundColor: "white",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <NavDrawer aria-label="menu button" />
          <Typography variant="h6" className={classes.title}>
            David Groechel & Renée DeVivo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
