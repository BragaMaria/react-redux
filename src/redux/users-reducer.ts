import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "../types/types";

let FOLLOW = 'users/FOLLOW';
let UNFOLLOW = 'users/UNFOLLOW';
let SET_USERS = 'users/SET_USERS';
let SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<userType>,
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 4,
    isFetching: false,
    isFollowingProgress: [2, 3] as Array<number> // Array of users id
}

type initialStateType = typeof initialState


export const usersReducer = (state = initialState, action: any): initialStateType => {
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

type followSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): followSuccessActionType => ({type: FOLLOW, userId})

type unFollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unFollowSuccess = (userId: number): unFollowSuccessActionType => ({type: UNFOLLOW, userId})

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersActionType => ({
    type: SET_USERS,
    users
})

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type toggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        let response = await usersAPI.getUsersRequest(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setCurrentPage(currentPage))
    }
}

const followUnFollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnFollowFlow(dispatch, userId, usersAPI.followUserRequest.bind(usersAPI), followSuccess)

    }
}
export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnFollowFlow(dispatch, userId, usersAPI.unFollowUserRequest.bind(usersAPI), unFollowSuccess)
    }
}