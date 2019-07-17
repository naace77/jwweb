import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyImage from "../../assets/images/MyPic.png";
import Intro from "../../components/Intro";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  MainContanier: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: 15
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paperTitle: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  myPic: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  memo: {
    color: "#000",
    marginTop: 15,
    marginLeft: 15
  }
}));
const Main = () => {
  const classes = useStyles();
  const memoList = [
    `"앱을 알게 되다."`,
    `2012년 2월 해병대 부사관 임관 후 처음으로 접한 스마트폰. 당시만 해도 전 그저 문자와 전화, '카카오톡'만 사용하는 일반 사람 이었습니다.`,
    `스마트폰이 일상이 되고 새로운 앱들이 쏟아져 나올 당시 '혹시 내 차를 관리 해주는 어플이 있으면 어떨까 ?' 라는 생각을 했고 얼마 지나지 않아 제가 생각 했던 어플은 출시 되어 있었습니다.`,
    `이 때 부터 앱이란 것에 관심이 생겼던 것 같습니다. `,
    ``,
    `"상상 하다."`,
    `어느 날 당직 근무 중 새벽에 근무자 교대를 마치고 정자에 앉아 철장 밖을 보았습니다. 당시 김포에 위치한 부대에서 부대 밖의 모습은 여의도 불꽃축제의 현장이 멀리 보이는 위치였습니다.`,
    `'허무' 했습니다. 분명 꿈이 있던 나였는데, 미래의 나는 어떤 모습일지 상상했습니다. '중사, 상사, 원사'의 길은 '같은 일, 같은 옷, 같은 생활'을 벗어 날 수 없는 것을 깨닳았습니다.`,
    `저 멀리 불꽃 아래 있는 나의 모습을 상상했습니다. '흥분' 됐습니다. 하루 빨리 이 '철장'을 나가고 싶었습니다.`,
    ``,
    `"결정 하다."`,
    `전역을 결정하고 이 후의 삶을 그리기 시작했습니다. '군대에서 배운 중장비를 이용한 직업을 갖을까 ?', '핸드폰을 팔아볼까 ?', '아버지 처럼 보험 회사에 취업할까 ?'`,
    `막상 사회에 나가려니 힘들었습니다. 적성을 찾아가야 할까 지금 할 수 있는 일로 이어 나가야 할까, 계속 생각 하고 또 생각하고 결론을 내렸습니다.`,
    `'다른 일, 다른 옷, 다른 생활' 과 '적성과 재능'. 어릴적 부터 수학과 컴퓨터를 좋아했던 저는 잊고 있던 '앱'이 떠올랐고 모든 전제 조건이 만족하는 앱을 만드는 개발자가 되기로 '결정' 했습니다.`,
    `개발자가 되기 위해 전역 후 청주대학교 토목과 2학년으로 복학하고 컴퓨터정보공학과로 전과하였습니다.`
  ];
  return (
    <>
      <Grid container spacing={3} className={classes.MainContanier}>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <img className={classes.myPic} src={MyImage} alt="MYPIC" />
          </Paper>
          <Paper className={classes.paper}>
            <label>김종우</label>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paperTitle}>
            <Typography className={classes.MainTitle}>
              김종우의 개발자 Story !
            </Typography>
          </Paper>
          <Paper className={classes.paperTitle}>
            <Typography className={classes.title}>
              개구리, 철장을 나오다
            </Typography>
            {memoList.map((item, index) => {
              return (
                <Typography key={index} className={classes.memo}>
                  {item}
                </Typography>
              );
            })}
          </Paper>
          <Intro />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
