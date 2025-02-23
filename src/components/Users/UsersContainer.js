import {connect} from "react-redux";
import {
  getUsers, follow, unFollow, setCurrentPage
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowingProgress,
  getPageSize,
  getTotalUsersCount, getUsersSelector,
} from "../../redux/users-selectors";


export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    let {getUsers, currentPage, pageSize} = this.props
    getUsers(currentPage, pageSize)
  }

  onPageChanged = (p) => {
    let {getUsers, pageSize} = this.props
    getUsers(p, pageSize)
  }

  render = () => {
    let {isFetching, totalUsersCount, pageSize, currentPage, users, isFollowingProgress, follow, unFollow} = this.props
    return (
      <>
        {isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          users={users}
          onPageChanged={this.onPageChanged}
          isFollowingProgress={isFollowingProgress}
          follow={follow}
          unFollow={unFollow}
        />
      </>)
  }


}

let mstp = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingProgress: getIsFollowingProgress(state)
  }
}


export default compose(
  connect(mstp, {
    follow,
    unFollow,
    getUsers,
    setCurrentPage
  }),
  WithAuthRedirect
)(UsersAPIComponent)

