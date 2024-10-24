import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

  componentDidMount = () => {
   axios
     .get('https://social-network.samuraijs.com/api/1.0/auth/me',{
       withCredentials:true
     })
     .then((data)=>{
       if(data.data.resultCode === 0){
         let {login,email,id} = data.data.data
         this.props.setAuthUserData(id,email,login)
       }

       return data})
  }

  render = () => {
    return (
      <Header {...this.props}/>
    )
  }
}

let mstp = (state)=>({
  isAuth:state.auth.isAuth,
  login:state.auth.login
})

export default connect(mstp,{setAuthUserData})(HeaderContainer)

