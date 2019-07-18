import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfileAcademic from "../../components/Profile/ProfileAcademic";
import ProfileCareer from "../../components/Profile/ProfileCareer";
import ProfileSkill from "../../components/Profile/ProfileSkill";
import ProfileCertificate from "../../components/Profile/ProfileCertificate";

const useStyles = makeStyles(theme => ({
  ProfileContainer: {
    padding: 30
  },
  profileTitleTxt: {
    color: "#000",
    fontSize: 30,
    fontStyle: "bold"
  },
  profileTitleDiv: {
    marginTop: 20,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: "1px",
    border: "solid 0",
    padding: 15
  }
}));
const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.ProfileContainer}>
      <Paper>
        <div className={classes.profileTitleDiv}>
          <label className={classes.profileTitleTxt}>
            무한한 가능성을 가진 웹, 앱 풀스택 개발자 !
          </label>
        </div>
      </Paper>
      <Paper>
        <ProfileInfo />
      </Paper>
      <Paper>
        <ProfileAcademic />
      </Paper>
      <Paper>
        <ProfileCareer />
      </Paper>
      <Paper>
        <ProfileSkill />
      </Paper>
      <Paper>
        <ProfileCertificate />
      </Paper>
    </div>
  );
};

export default Profile;
