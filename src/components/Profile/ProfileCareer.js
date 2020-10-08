import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#4C79AD",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  profileTopDiv: {
    marginTop: 20,
    padding: 15
  },
  profileTopRight: {
    marginLeft: 25,
    display: "flex",
    flexDirection: "column"
  },
  profileTopRightItem: {
    flex: 1
  },
  prifileTable: {
    marginTop: 15
  }
}));

const ProfileCareer = () => {
  const classes = useStyles();
  function createData(Period, name, major, credit) {
    return { Period, name, major, credit };
  }

  const rows = [
    createData(
      "2019.11 ~ 재직중",
      "파고다아카데미",
      "개발팀 / Manager / 웹개발",
      "3450만원"
    ),
    createData(
      "2018.08 ~ 2019.08",
      "라인페이롤서비스",
      "전산팀 / 사원 / 앱개발",
      "3200만원"
    ),
    createData(
      "2018.01 ~ 2018.08",
      "디엘정보기술",
      "솔루션사업부 / 사원 / 유지보수",
      "2550만원"
    ),
    
  ];
  const Today = new Date();
  const ExDay = new Date(2017, 11, 27);
  const diff = Today - ExDay;
  const currDay = 24 * 60 * 60 * 1000;
  const currMonth = currDay * 30;
  const currYear = currMonth * 12;
  return (
    <div className={classes.profileTopDiv}>
      <div>
        <label style={{ fontSize: 20, marginRight: 20 }}> 경력 </label>
        <label> 2017.12.27 부터 </label>
        <label
          style={{
            fontSize: 18,
            backgroundColor: "#4cd1d1",
            padding: 7,
            color: "#fff",
            borderRadius: 10
          }}
        >
          {parseInt(diff / currYear)} 년{" "}
          {parseInt(diff / currMonth) - 12 * parseInt(diff / currYear)} 개월
        </label>
      </div>
      <div className={classes.prifileTable}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>기간</StyledTableCell>
              <StyledTableCell>회사명</StyledTableCell>
              <StyledTableCell>부서/직급/직책</StyledTableCell>
              <StyledTableCell>연봉</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Period}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.major}</StyledTableCell>
                <StyledTableCell>{row.credit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProfileCareer;
