import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  memo: {
    color: "#000",
    marginLeft: 15,
    marginBottom: 10
  }
}));
const Expansion = props => {
  const classes = useStyles();
  const { Summary, Memo } = props;
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{Summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Memo.map((item, index) => {
              return (
                <Typography key={index} className={classes.memo}>
                  {item}
                </Typography>
              );
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Expansion;
