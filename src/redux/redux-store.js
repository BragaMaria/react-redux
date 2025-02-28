import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleWare)
));


window.__store__ = store
export default store