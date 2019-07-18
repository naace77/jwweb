import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectIcon from "../../components/Project/ProjectIcon";
import Icon01 from "../../assets/images/p_icon01.png";
import Icon02 from "../../assets/images/p_icon02.png";
import Icon03 from "../../assets/images/p_icon03.png";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import P01 from "../../components/Project/ProjectIntro";
const useStyles = makeStyles(theme => ({
  ProjectContainer: {
    padding: 30
  },
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
const Project = () => {
  const classes = useStyles();
  const [projectNum, setProjectNum] = useState(2);
  const project = [
    {
      introduction: {
        link:
          "https://play.google.com/store/apps/details?id=com.infra.drpayapp",
        memo: [
          `근태, 급여, 연차사용 정보를 조회하고 연차신청 등 전자 문서 기능을 제공하는 앱`,
          `1. 라즈베리파이3에 비콘 기능을 추가하여 장치와 BLE 연결로 출/퇴근 시간 기록`,
          `2. 기록된 출/퇴근 기록을 토대로 근무 시간 계산`,
          `    - 자신의 기본 출퇴근 시간이 정해져있다면 정상근무 또는 초과근무 시간 계산 가능 (주 52시간 초과 대비)`,
          `3. 업무요청, 전자문서, 전자 결재 기능`,
          `    - 불필요한 페이퍼 낭비 방지, 추가 WEB 개발로 손쉽게 이용 가능`
        ]
      },
      front: {
        tag: [`# MacOS`, `# VSCode`, `# ReactNative`, `# Styled`],
        period: "5개월 + @",
        memo: [
          `기획 분석 후 개발 총 담당`,
          `REST API Server 와 axios API 통신으로 데이터 수신 및 가공`,
          `Beacon을 이용한 출/퇴근 시간 기록 기능`,
          `교대 근무 월별 근무 현황 체크 및 메모 기능`,
          `전자 문서 기능 (Redux를 이용한 state 관리)`
        ]
      },
      backend: {
        tag: [
          `# Ubuntu`,
          `# Eclipse`,
          `# Java Sevelet`,
          `# Tomcat 8.5`,
          `# MySql`
        ],
        period: "1개월 + @",
        memo: [
          `서버 개발자 퇴사 후 인수`,
          `REST API Server 유지보수 및 추가개발`,
          `MVC 패턴 활용`
        ]
      }
    },
    {
      introduction: {
        link: "https://www.linepayroll.com/",
        memo: [
          `급여박사2 앱과 전자문서를 공유하는 웹 (+ 홈페이지 리뉴얼 작업 예정)`,
          `1. 업무요청, 전자문서, 전자 결재 기능`,
          `    - 불필요한 페이퍼 낭비 방지, 추가 WEB 개발로 손쉽게 이용 가능`
        ]
      },
      front: {
        tag: [`# MacOS`, `# VSCode`, `# React`, `# NextJs`, `# Html`, `# CSS`],
        period: "1개월 + @",
        memo: [
          `개발 총 담당`,
          `REST API Server 와 axios API 통신으로 데이터 수신 및 가공`,
          `Redux, Redux-Saga 사용`,
          `React로 최초 테스트용 사이트 next.js 로 리뉴얼 중`
        ]
      },
      backend: {
        tag: [`# MacOS`, `# VSCode`, `# NodeJs`, `# Express`, `# nginX`],
        period: "1개월 + @",
        memo: [
          `Java -> NodeJs 로 이전 작접 중`,
          `REST API Server 개발 및 유지보수`,
          `promise 사용으로 동기적으로 쿼리 실행`,
          `nginX letsencrypt https 연결`,
          `passport session 관리`
        ]
      }
    },
    {
      introduction: {
        link: "",
        memo: [
          `장비 생산성 증가를 위한 TFT 회의 자료용 프로그램`,
          `10개이상의 Table을 조인하여 장비별, 기간별 Data 집계 chart`
        ]
      },
      front: {
        tag: [`# Windows10`, `# VisualStudio`, `# C#`, `# chartFx`],
        period: "2개월",
        memo: [
          `장비 데이터 기간별, 장비별 반도체 생산량 분석 chart 개발`,
          `chart, data -> excel 전환`
        ]
      },
      backend: {
        tag: [`# Oracle`, `# Orange`],
        period: "2개월",
        memo: [
          `천만, 억 단위의 실시간 장비 Data를 10개 이상의 Table Join으로 데이터 조합`,
          `Oracle explain 분석 후 최대한 빠른 로직 구현`
        ]
      }
    }
  ];
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectIconContainer}>
        <Button onClick={() => setProjectNum(2)}>
          <ProjectIcon iconImg={Icon03} iconTitle="매그나칩 반도체" />
        </Button>
        <Button onClick={() => setProjectNum(0)}>
          <ProjectIcon iconImg={Icon01} iconTitle="급여박사2" />
        </Button>
        <Button onClick={() => setProjectNum(1)}>
          <ProjectIcon iconImg={Icon02} iconTitle="그룹웨어" />
        </Button>
      </div>
      <P01 project={project[projectNum]} />
    </div>
  );
};

export default Project;
