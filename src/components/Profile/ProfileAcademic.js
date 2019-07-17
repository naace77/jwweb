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

const ProfileAcademic = () => {
  const classes = useStyles();
  function createData(Period, name, major, credit) {
    return { Period, name, major, credit };
  }

  const rows = [
    createData(
      "2010.03 ~ 2019.02",
      "청주대학교",
      "컴퓨터정보공학",
      "3.5 / 4.5"
    ),
    createData("2007.03 ~ 2010.02", "상당고등학교", "이과", "-")
  ];
  return (
    <div className={classes.profileTopDiv}>
      <div>
        <label style={{ fontSize: 20, marginRight: 20 }}> 학력 </label>
        <label
          style={{
            fontSize: 18,
            backgroundColor: "#4cd1d1",
            padding: 7,
            color: "#fff",
            borderRadius: 10
          }}
        >
          청주대학교 4년 졸업
        </label>
      </div>
      <div className={classes.prifileTable}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>기간</StyledTableCell>
              <StyledTableCell>학교명</StyledTableCell>
              <StyledTableCell>전공</StyledTableCell>
              <StyledTableCell>학점</StyledTableCell>
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

export default ProfileAcademic;
