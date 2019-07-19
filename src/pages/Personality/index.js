import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  PersnalityContainer: {
    padding: 15,
    display: "flex",
    flexDirection: "column"
  }
});
const Personality = () => {
  const classes = useStyles();
  const [seletedPage, setSelectedPage] = useState(0);
  const insung = [
    require("../../assets/images/i_02.png"),
    require("../../assets/images/i_03.png"),
    require("../../assets/images/i_04.png"),
    require("../../assets/images/i_05.png"),
    require("../../assets/images/i_06.png"),
    require("../../assets/images/i_01.png")
  ];
  const juksung = [
    require("../../assets/images/j_01.png"),
    require("../../assets/images/j_02.png")
  ];
  return (
    <div className={classes.PersnalityContainer}>
      <h2>아래의 내용은 '사람인' 인적성 검사의 결과 입니다.</h2>
      <div style={{ marginBottom: 20 }}>
        <Button
          style={{ backgroundColor: seletedPage === 0 && "#d1d1d1" }}
          onClick={() => {
            setSelectedPage(0);
          }}
        >
          인성
        </Button>

        <Button
          style={{ backgroundColor: seletedPage === 1 && "#d1d1d1" }}
          onClick={() => {
            setSelectedPage(1);
          }}
        >
          적성
        </Button>
      </div>
      {seletedPage === 0 &&
        insung.map((item, index) => {
          return (
            <Paper key={index}>
              <img src={item} />
            </Paper>
          );
        })}
      {seletedPage === 1 &&
        juksung.map((item, index) => {
          return (
            <Paper key={index}>
              <img src={item} />
            </Paper>
          );
        })}
    </div>
  );
};

export default Personality;
