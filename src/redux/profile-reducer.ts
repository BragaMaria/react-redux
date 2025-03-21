import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {postType, ProfilePhotosType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const UPDATE_USER_STATUS = 'profile/UPDATE_USER_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'


let initialState = {
    posts: [
        {id: 1, text: 'hello', likesCount: 45},
        {id: 2, text: 'good', likesCount: 47},
        {id: 3, text: 'word', likesCount: 40},
    ] as Array<postType>,
    profile: null as ProfileType | null,
    status: ""
}

type initialStateType = typeof initialState

export const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: Object.keys(state.posts).length + 1, text: action.postText, likesCount: 0}]
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.idPost)
            }
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }

        default:
            return state
    }


}

type addPostActionType = {
    type: typeof ADD_POST
    postText: string
}

export const addPost = (postText: string): addPostActionType => ({type: ADD_POST, postText});

type deletePostActionType = {
    type: typeof DELETE_POST
    idPost: number
}
export const deletePost = (idPost: number): deletePostActionType => ({type: DELETE_POST, idPost})

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})

type updateUserStatusActionType = {
    type: typeof UPDATE_USER_STATUS
    status: string
}
export const updateUserStatus = (status: string): updateUserStatusActionType => ({type: UPDATE_USER_STATUS, status})

type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: ProfilePhotosType
}
export const savePhotoSuccess = (photos: ProfilePhotosType): savePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const getProfile = (userId: number) => {
    return async (dispatch: any) => {
        let response = await usersAPI.userProfileRequest(userId)
        dispatch(setUserProfile(response))
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: any) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(updateUserStatus(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(updateUserStatus(status))
        }
    }
}

export const savePhoto = (path: string) => {
    return async (dispatch: any) => {
        let response = await profileAPI.savePhoto(path)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}
export const saveProfile = (formData: ProfileType) => {
    return async (dispatch: any, getState: any) => {
        const userId = getState().auth.id
        const response = await profileAPI.saveProfile(formData)
        debugger
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }
}

