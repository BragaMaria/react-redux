import {connect} from "react-redux";
import {Friends} from "./Friends/Friends";

let mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)