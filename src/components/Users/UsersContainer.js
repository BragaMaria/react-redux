import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(data => {
        this.props.setUsers(data.data.items)
        this.props.setTotalUsersCount(data.data.totalCount)
      })

  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(data => {
        this.props.setUsers(data.data.items)
      })
  }

  render = () => {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      followUser={this.props.followUser}
      unFollow={this.props.unFollow}
      onPageChanged={this.onPageChanged}
    />
  }


}

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
export const UsersContainer = connect(mstp, mdtp)(UsersAPIComponent)

