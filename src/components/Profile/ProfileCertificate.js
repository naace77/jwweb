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

const ProfileCertificate = () => {
  const classes = useStyles();
  function createData(Period, name, major) {
    return { Period, name, major };
  }

  const rows = [
    createData("굴삭기운전기능사", "2014.09.19"),
    createData("로더운전기능사", "2015.03.27"),
    createData("지게차운전기능사", "2015.09.10"),
    createData("정보처리기사(필기)", "2019.04.27")
  ];
  return (
    <div className={classes.profileTopDiv}>
      <div>
        <label style={{ fontSize: 20, marginRight: 20 }}> 자격증 </label>
      </div>
      <div className={classes.prifileTable}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>자격증</StyledTableCell>
              <StyledTableCell>취득일</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Period}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProfileCertificate;
