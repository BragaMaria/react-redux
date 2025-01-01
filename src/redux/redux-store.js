import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {thunk as thunkMiddleWare} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  sideBar:sidebarReducer,
  usersPage:usersReducer,
  auth:authReducer,
  form:formReducer,
})
let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store
export default store