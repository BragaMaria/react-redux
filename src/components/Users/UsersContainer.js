import {connect} from "react-redux";
import {Users} from "./UsersC";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/users-reducer";


let mstp = (state) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage
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
    },
    setCurrentPage:(pageNumber)=>{
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount:(totalCount)=>{
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}
export const UsersContainer = connect(mstp, mdtp)(Users)

