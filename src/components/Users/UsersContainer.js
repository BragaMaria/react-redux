import {connect} from "react-redux";
import {
  getUsers, follow, unFollow, setCurrentPage
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize)
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
          onPageChanged={this.onPageChanged}
          isFollowingProgress={this.props.isFollowingProgress}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
        />
      </>)
  }


}

let authRedirect = WithAuthRedirect(UsersAPIComponent)

let mstp = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  }
}


export const UsersContainer =
  connect(mstp, {
    follow,
    unFollow,
    getUsers,
    setCurrentPage
  })
  (authRedirect)

