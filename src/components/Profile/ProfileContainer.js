import React, {useEffect} from "react";
import {Content} from "./Content";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom';

export function withRouter(ProfileContainer) {

  return (props) => {

    const match = {params: useParams()};
    const location = {location: useLocation()}
    return <ProfileContainer {...props} match={match} location={location}/>
  }
}

const ProfileContainer = (props)=>{
  let navigate = useNavigate()
  useEffect(() => {
    if (!props.isAuth ) {
      return navigate("/login")
    }

  })

  useEffect(()=>{
    let userId = props.match.params.userId
    props.getProfile(userId)
  },[props])

  return <div>
    <Content {...props} />
  </div>
}


let mstp = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

export default connect(mstp, {
  setUserProfile, getProfile
})(withRouter(ProfileContainer))

