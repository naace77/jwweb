import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyImage from "../../assets/images/MyPic.png";
const useStyles = makeStyles(theme => ({
  profileTopDiv: {
    marginTop: 20,
    padding: 15,
    display: "flex"
  },
  profileTopRight: {
    marginLeft: 25,
    display: "flex",
    flexDirection: "column"
  },
  profileTopRightItem: {
    flex: 1
  }
}));

const ProfileInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileTopDiv}>
      <img src={MyImage} />
      <div className={classes.profileTopRight}>
        <div className={classes.profileTopRightItem}>
          <label style={{ fontSize: 20 }}> 김종우</label>
          <label>/ 1991년 (29세) </label>
          <label>/ 남 </label>
          <label>/ 재직중</label>
        </div>
        <div className={classes.profileTopRightItem}>
          <label>naace910@gmail.com</label>
        </div>
        <div className={classes.profileTopRightItem}>
          <label>010-8360-3806</label>
        </div>
        <div className={classes.profileTopRightItem}>
          <label>(28523) 충북 청주시 상당구 용담동 165-8(401호)</label>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
