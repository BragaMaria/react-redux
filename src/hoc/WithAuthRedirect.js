import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";

let mstpForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})
export const WithAuthRedirect = (Component) => {
   const RedirectComponent = (props) => {
    let navigate = useNavigate()
    useEffect(() => {
        if (!props.isAuth) {
          return navigate("/login")
        }
      }
    )
    return <Component {...props}/>
  }
  let ConnectedAuthRedirectComponent = connect(mstpForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent

}