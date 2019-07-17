import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Expansion from "./Expansion";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Intro = () => {
  const classes = useStyles();
  const expansionList = [
    {
      summary: "대학 생활",
      memo: [
        `"새로운 시작"`,
        `26살에 2학년으로 복학한 저는 앞으로의 학교생활이 매우 흥미로웠습니다. 또 새로운 만남, 나의 미래를 기대했습니다.`,
        `기대되는 즐거운 학교생활을 위해 성적보다는 사람을 선택했습니다. 혼자 외롭게 학교를 다니는 것 보다 같이 공부 할 친구를 원했습니다.`,
        `같은 학년에 비해 나이가 많아 저를 어렵게 생각 할 수 있는 후배들에게 먼저 다가갔고, 그 때 만난 후배의 제안으로 연구실에 소속되었습니다. 이제 '시작' 이었습니다.`,
        ``,
        `"목표 그리고 성과"`,
        `전역 전 결혼을 하고 아내와 딸이 있는 한 가정의 가장과 학생으로서 단 하나의 목표를 정하였습니다.`,
        `'9시 출근 6시 퇴근' 집에서 뒹구는 가장이 되기 싫었고 개발자가 되기위해 공부를 하는 학생이 되고 싶었습니다.`,
        `애기가 아프거나, 예비군을 가야 하는 상황이 아니고는 2년 내내 하루도 빠짐없이 연구실로 출근 했습니다.`,
        `2학년 첫 학점 3.8 사실 좀 실망 했습니다. 전공 수업은 B+ 이상 받았는데 영어회화, 교양 과목에서는 도저히 점수가 나지 않았습니다.`,
        `다행히도 처음 접한 JAVA를 재밌어하였고, 프로그래밍에 '열정'이 생겼습니다. 2학년 1년은 '적응' 기간이었던 것 같습니다. 수 많은 과제로 프로그래밍 보다는 기초 학습에 가까웠습니다.`,
        `3학년이 되고 이제 데이터베이스, 운영체제, JAVA 심화 과정이 들어가면서 부터 저는 개발자가 되었음을 느꼈습니다.`,
        `이 느낌을 살려 신나게 공부하였고 3학년 학점 평균 4.5의 '성과'를 이루었고, 3학년이 끝날 무렵 '교직 생활 중 처음 본다.'라는 교수님의 말을 듣고 자신감이 생겼습니다.`,
        `그 해 저에게 자신감을 심어 주신 교수님의 도움으로 3학년이 끝나고 바로 실무 인턴, 4학년 조기취업을 할 수 있게 되었습니다.`
      ]
    },
    {
      summary: "직장 생활",
      memo: [
        `"(주) 디엘정보기술"`,
        `3학년이 끝나고 겨울방학이 되던 시기에 9학점을 얻을 수 있고 조금이나마 돈을 벌 수 있는 현장실습과목이 개설되어 인턴을 가기로 결정했습니다.`,
        `처음 인턴을 하게 될 회사는 청주의 조그만 웹에이전시 회사였고, 급여를 차비,밥 값 수준으로만 준다고 하여 많이 망설이고 있었습니다.`,
        `이 소식을 전해 들은 외부 강사 교수님 께서 저에게 (주) 디엘정보기술 을 소개 해 주셨고, 정규직 수습 수준의 월급을 받도록 도와주셨습니다.`,
        `그렇게 교수님의 도움으로 생활된 (주) 디엘정보기술 에서 vb6로 만들어진 프로그램 유지보수 업무를 담당하였고 무리없이 업무를 진행하였습니다.`,
        `그러던 어느 날 우진엔지니어링 회사를 담당하여 프로그램을 고객사에 맡게 작업하는 업무를 받게 되었고, 당시 부장님께서 과정을 PPT로 설명을 하는 자리를 만들어 주셨습니다.`,
        `이 때 처음으로 실무에서 임원분들 앞에서 발표하는 자리를 갖게 되었고, 많은 칭찬과 기대를 받았습니다.`,
        `덕분에 저는 인턴 종료 시점에 학교 시험 등 일정에 휴가를 주는 조건으로 조기취업 정규직으로 전환 되었습니다.`,
        `그 해 4월 매그나칩반도체 팀의 인력부족으로 파견근무를 갔습니다. 팀에선 자동화 UI 유지보수 및 추가 개발 업무를 담당하였습니다.`,
        `매그나칩반도체 팀장님의 오더를 받아 프로그램을 만들었고, 당시 프로젝트 제작 기간과 퀄리티에 만족하신 팀장님의 제안으로 TFT 전용 프로그램을 맡게 되었습니다.`,
        `업무는 수천, 수억 건의 장비에서 나오는 데이터들을 종합하여 장비의 생산성을 높이기 위한 회의 자료 준비를 위한 프로그램 제작.`,
        `11개의 테이블을 조인하고, 데이터를 검증한 후 chart로 만들어 이 자료로 회의를 하는 그런 프로그램이었습니다.`,
        `야근도 자주 했지만 이 업무를 하며 DB 이해가 높아졌고, 매그나칩반도체 본사 직원들과 협업을 하는 경험이 되었습니다.`,
        ``,
        `"(주) 라인페이롤 서비스"`,
        `저는 앱을 만들기 위해 개발자가 되었습니다. 당시 (주)디엘정보기술, 매그나칩반도체는 앱을 만드는 회사가 아니었기에 저는 과감히 이직을 결정하였습니다.`,
        `Android 개발자로 (주) 라인페이롤 서비스에 조금더 높은 급여조건으로 입사하게 되었고, 오랜 꿈이었던 앱 개발자가 되는 시점이었습니다.`,
        `JAVA 서버 개발을 맡은 신입개발자와 Android 개발자 저, IOS 외주 개발 회사, 프로젝트 관리자 본사 팀장과 프로젝트를 진행했습니다.`,
        `그러던 어느 날 외주 개발을 맡은 회사가 회사 사정으로 인해 폐업을 하게 되며 난항을 겪게 되었습니다. 저는 회사에 'React Native'로 해보겠다 라고 제안을 하였고`,
        `Android 로 반쯤 개발된 프로젝트를 새로이 만들게 되었습니다. 잠이 오지 않았습니다.`,
        `회사의 걱정이 눈에 보였습니다. 처음 접하는 Javascript, React 저에게도 큰 도전이었습니다. `,
        `먼저 언어를 익히기 위해 영어 번역을 돌려가며 공식문서를 분석하고, 수 많은 관련 강의를 보며 앱을 만들게 되었습니다.`,
        `앱 배포 시기 한달을 앞두고 서버 개발자가 개인사정으로 회사를 퇴사하게 되었습니다.`,
        `아직 10% 정도의 API와 이 후 유지보수에 대해 저는 제가 다 맡아서 하겠다 하고 인센티브를 약속받고 동시에 작업을 하게 됩니다.`,
        `결과는 예정된 시간에 서비스 배포까지 마무리 되었습니다. 지금도 앱과 서버 유지보수를 혼자 담당하고 있습니다.`
      ]
    }
  ];
  return (
    <div>
      {expansionList.map((item, index) => {
        return (
          <Expansion Summary={item.summary} Memo={item.memo} key={index} />
        );
      })}
    </div>
  );
};

export default Intro;
