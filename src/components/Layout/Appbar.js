import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appbarHome: {
    textDecoration: "none"
  },
  appbarItem: {
    textDecoration: "none",
    marginLeft: 50
  }
});

const Appbar = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/" className={classes.appbarHome}>
            JongWoo. Kim
          </Link>
          <Link to="/Profile" className={classes.appbarItem}>
            프로필
          </Link>
          <Link to="/Project" className={classes.appbarItem}>
            프로젝트
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
