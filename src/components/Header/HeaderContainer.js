import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData, setLogin} from "../../redux/auth-reducer";


export class HeaderContainer extends React.Component {


  componentDidMount = () => {
    this.props.setLogin()
  }

  render = () => {
    return (
      <Header {...this.props}/>
    )
  }
}

let mstp = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.email,
})

export default connect(mstp, {setAuthUserData,logout,setLogin})(HeaderContainer)

