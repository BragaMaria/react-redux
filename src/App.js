import "./App.css";
import {NavBar} from "./components/Nav/NavBar.js";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import HeaderContainer from "./components/Header/HeaderContainer";
import React, {lazy} from "react";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer.js'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Login = lazy(() => import('./components/Login/Login'))


export const App = () => {
  return (
    <div className='app-wrapper'>
      <React.Suspense fallback={<Preloader/>}>
        <HeaderContainer/>
        <NavBar/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
            <Route path='profile/*' element={<ProfileContainer/>}/>
            <Route path='profile/:userId?' element={<ProfileContainer/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </React.Suspense>
    </div>
  );
}

export let SamuraiJsApp = (props) => {
  return <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>
  </React.StrictMode>
}




