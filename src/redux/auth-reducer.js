import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {id: null, email: null, login: null, isAuth: false}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}


export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {id, email, login, isAuth}
})

export const setLogin = () => {

  return async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
      let {id, login, email} = response.data
      dispatch(setAuthUserData(id, login, email, true))
    } else {
      let message = response.messages.length > 0 ? response.messages[0] : "Some error"
      dispatch(stopSubmit('login', {_error: message}))
    }

  }
}

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(setLogin())
    }

  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

