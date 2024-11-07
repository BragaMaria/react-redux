import {connect} from "react-redux";
import {
  followUser,
  toggleIsFetching,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unFollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials:true
        })
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.data.items)
        this.props.setTotalUsersCount(data.data.totalCount)
      })

  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p)
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
        {
          withCredentials:true
        }
        )
      .then(data => {
        this.props.setUsers(data.data.items)
        this.props.toggleIsFetching(false)
      })

  }

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followUser={this.props.followUser}
          unFollow={this.props.unFollow}
          onPageChanged={this.onPageChanged}
        />
      </>)
  }


}

let mstp = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}


export const UsersContainer =
  connect(mstp, {followUser, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})
(UsersAPIComponent)

