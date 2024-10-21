import React from "react";
import {Content} from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component{

  componentDidMount = () =>{
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/5')
      .then((data)=>{
        this.props.setUserProfile(data.data)
      })
  }

  render = ()=> (
    <div>
      <Content {...this.props} />
    </div>
  );
}

let mstp = (state)=>({
  profile:state.profilePage.profile
})

export default connect(mstp,{
  setUserProfile,
})(ProfileContainer)

