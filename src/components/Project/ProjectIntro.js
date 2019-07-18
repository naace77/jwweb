import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  ProjectFrontContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    padding: 20
  },
  ProjectBackendContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    padding: 20
  },
  lblTitle: {
    fontSize: 18,
    backgroundColor: "#4cd1d1",
    padding: 7,
    color: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    width: 80,
    textAlign: "center"
  },
  lblLang: {
    fontSize: 15,
    backgroundColor: "#486588",
    padding: 7,
    color: "#fff",
    borderRadius: 10,
    margin: 15,
    textAlign: "center"
  },
  itemDiv: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column"
  }
}));
const ProjectIntro = props => {
  const classes = useStyles();
  const { project } = props;

  return (
    <div className={classes.ProjectCenterContainer}>
      <Paper>
        <div className={classes.ProjectFrontContainer}>
          <label className={classes.lblTitle}>소개</label>
          {project.introduction.link !== "" && (
            <a href={project.introduction.link}>Project Link</a>
          )}

          <div className={classes.itemDiv}>
            <div>
              {project.introduction.memo.map((item, index) => {
                return <Typography key={index}>{item}</Typography>;
              })}
            </div>
          </div>
        </div>
      </Paper>
      <Paper>
        <div className={classes.ProjectFrontContainer}>
          <label className={classes.lblTitle}>FRONT</label>
          <div>
            {project.front.tag.map((item, index) => {
              return (
                <label key={index} className={classes.lblLang}>
                  {item}
                </label>
              );
            })}
          </div>
          <div className={classes.itemDiv}>
            <label style={{ fontSize: 20 }}>1. 기간</label>
            <label style={{ padding: 15 }}>{project.front.period}</label>
            <label style={{ fontSize: 20 }}>2. 개발 내용</label>
            <div
              style={{
                padding: 15,
                display: "flex",
                flexDirection: "column"
              }}
            >
              {project.front.memo.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </div>
          </div>
        </div>
      </Paper>
      <Paper>
        <div className={classes.ProjectBackendContainer}>
          <label className={classes.lblTitle}>BACKEND</label>{" "}
          <div>
            {project.backend.tag.map((item, index) => {
              return (
                <label key={index} className={classes.lblLang}>
                  {item}
                </label>
              );
            })}
          </div>
          <div className={classes.itemDiv}>
            <label style={{ fontSize: 20 }}>1. 기간</label>
            <label style={{ padding: 15 }}>{project.backend.period}</label>
            <label style={{ fontSize: 20 }}>2. 개발 내용</label>
            <div
              style={{
                padding: 15,
                display: "flex",
                flexDirection: "column"
              }}
            >
              {project.backend.memo.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ProjectIntro;
