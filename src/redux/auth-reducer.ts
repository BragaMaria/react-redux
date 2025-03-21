import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'auth/SET_USER_DATA';
let GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    captchaUrl: null as null|string
}
export type initialStateType = typeof initialState

export const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state
    }
}

export type setAuthUserDataPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadType
}


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})


export type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const setLogin = () => {

    return async (dispatch: any) => {
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

export const login = (email: string, password: string, rememberMe: boolean, captcha: null) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.resultCode === 0) {
            dispatch(setLogin())
        } else if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl();

        debugger
        const captchaUrl = response.url

        dispatch(getCaptchaUrlSuccess(captchaUrl))


    }
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

