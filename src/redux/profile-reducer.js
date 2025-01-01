import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'


let initialState = {
  posts: [
    {id: 1, text: 'hello', likesCount: 45},
    {id: 2, text: 'good', likesCount: 47},
    {id: 3, text: 'word', likesCount: 40},
  ],
  newPostText: '',
  profile: null,
  status:""
}


export const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 5, text: state.newPostText, likesCount: 0}]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }

    }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile:action.profile
      }

    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }


}
export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile)=>({type:SET_USER_PROFILE, profile})
export const updateUserStatus = (status)=>({type:UPDATE_USER_STATUS, status})

export const getProfile = (userId)=>{
  return (dispatch)=>{
    usersAPI.userProfileRequest(userId)
      .then((data)=>{
        dispatch(setUserProfile(data))
      })
  }
}

export const getStatus = (userId)=>{
  return (dispatch)=>{
    profileAPI.getStatus(userId)
      .then((data)=>{

        dispatch(updateUserStatus(data.data))
      })
  }
}

export const updateStatus = (status)=>{
  return (dispatch)=>{
    profileAPI.updateStatus(status)
      .then((data)=>{
        if(data.data.resultCode===0){
          dispatch(updateUserStatus(status))
        }

      })
  }
}