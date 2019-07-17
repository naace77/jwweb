import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  ProjectIcon: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  ProjectIconDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContents: "center",
    alignItems: "center"
  }
}));
const ProjectIcon = props => {
  const classes = useStyles();
  const { iconImg, iconTitle } = props;
  return (
    <div className={classes.ProjectIconDiv}>
      <img className={classes.ProjectIcon} src={iconImg} />
      <label>{iconTitle}</label>
    </div>
  );
};

export default ProjectIcon;
