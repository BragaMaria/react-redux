import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
  ],
  profile:null,
  status: ""
}


export const profileReducer = (state = initialState, action) => {

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
        ...state, profile: {...state.profile,photos: action.photos}
      }

    default:
      return state
  }




}
export const addPost = (postText) => ({type: ADD_POST, postText});

export const deletePost = (idPost) => ({type: DELETE_POST, idPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateUserStatus = (status) => ({type: UPDATE_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => {
  return async (dispatch) => {
    let response = await usersAPI.userProfileRequest(userId)
    dispatch(setUserProfile(response))
  }
}

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(updateUserStatus(response.data))
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(updateUserStatus(status))
    }
  }
}

export const savePhoto = (path)=>{
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(path)
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
    }}
}
export const saveProfile = (formData)=>{
  return async (dispatch,getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(formData)
    debugger
    if (response.data.resultCode === 0) {
      dispatch(getProfile(userId))
    } else{
      dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
      return Promise.reject(response.data.messages[0])
    }
  }
}

