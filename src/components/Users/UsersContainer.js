import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUserAC, unfollowAC} from "../../redux/users-reducer";


let mstp = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mdtp = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUserAC(users))
    }
  }
}
export const UsersContainer = connect(mstp, mdtp)(Users)

