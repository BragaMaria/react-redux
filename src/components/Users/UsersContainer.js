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
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsersRequest(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })

  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p)
    this.props.toggleIsFetching(true)
    usersAPI.getUsersRequest(p,this.props.pageSize).then(data => {
        this.props.setUsers(data.items)
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

