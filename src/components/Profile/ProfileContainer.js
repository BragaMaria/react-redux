import React, {useEffect} from "react";
import {Content} from "./Content";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useParams} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export function withRouter(ProfileContainer) {
  return (props) => {
    const match = {params: useParams()};
    const location = {location: useLocation()}
    return <ProfileContainer {...props} match={match} location={location}/>
  }
}

const ProfileContainer = (props) => {

  useEffect(() => {
    let userId = props.match.params.userId
    props.getProfile(userId)
    props.getStatus(userId)
  }, [props.match.params.userId])


  return <div>
    <Content {...props}  saveProfile={props.saveProfile} owner={props.match.params.userId} status={props.status} updateStatus={props.updateStatus}
             savePhoto={props.savePhoto}/>
  </div>
}
let mstp = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})
export default compose(
  connect(mstp, {
    setUserProfile, getProfile, getStatus, updateStatus,savePhoto,saveProfile
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)

