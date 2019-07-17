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

const ProfileSkill = () => {
  const classes = useStyles();
  function createData(Period, name, major) {
    return { Period, name, major };
  }

  const rows = [
    createData(
      "JavaScript",
      "중상",
      "React, ReactNative 급여박사2 APP 개발 및 유지보수"
    ),
    createData("java", "중상", "	REST API 유지보수 및 추가개발"),
    createData(
      "SQL",
      "중상",
      "매그나칩 파견 근무 시 대용량 DB를 조회하는 업무"
    ),
    createData("C#	", "중상", "매그나칩 파견 근무 시 UI 개발")
  ];
  return (
    <div className={classes.profileTopDiv}>
      <div>
        <label style={{ fontSize: 20, marginRight: 20 }}> 기술 </label>
      </div>
      <div className={classes.prifileTable}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>언어</StyledTableCell>
              <StyledTableCell>수준</StyledTableCell>
              <StyledTableCell>내용</StyledTableCell>
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProfileSkill;
