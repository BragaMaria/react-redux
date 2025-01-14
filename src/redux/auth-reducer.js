import {authAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';


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
  return (dispatch) => {
    authAPI.me()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
          dispatch(setAuthUserData(id, login, email, true))
        }

      })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      console.log(data);
      if (data.resultCode === 0) {
        dispatch(setLogin())
      }
    })
  }
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}

