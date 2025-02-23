import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

let FOLLOW = 'users/FOLLOW';
let UNFOLLOW = 'users/UNFOLLOW';
let SET_USERS = 'users/SET_USERS';
let SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageSize: 4,
  isFetching: false,
  isFollowingProgress: [2, 3]
}


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({
  type: SET_USERS,
  users
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})


export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsersRequest(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setCurrentPage(currentPage))
  }
}

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId) => {
  return async (dispatch) => {
    await followUnFollowFlow(dispatch, userId, usersAPI.followUserRequest.bind(usersAPI), followSuccess)

  }
}
export const unFollow = (userId) => {
  return async (dispatch) => {
    await followUnFollowFlow(dispatch, userId, usersAPI.unFollowUserRequest.bind(usersAPI), unFollowSuccess)
  }
}