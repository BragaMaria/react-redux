import React from "react";
import {Content} from "./Content";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useParams} from 'react-router-dom';

export function withRouter(ProfileContainer) {
  return (props) => {
    const match = {params: useParams()};
    const location = {location: useLocation()}
    return <ProfileContainer {...props} match={match} location={location}/>
  }
}

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId
    this.props.getProfile(userId)
  }

  render = () => (
    <div>
      <Content {...this.props} />
    </div>
  );
}

let mstp = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mstp, {
  setUserProfile, getProfile
})(withRouter(ProfileContainer))

