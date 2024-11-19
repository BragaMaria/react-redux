import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData,setLogin} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

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
  login: state.auth.login
})

export default connect(mstp, {setAuthUserData, setLogin})(HeaderContainer)

