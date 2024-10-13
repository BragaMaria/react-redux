import "./App.css";
import {Content} from "./components/Profile/Content.js";
import {Header} from "./components/Header/Header.js";
import {NavBar} from "./components/Nav/NavBar.js";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export const App = () => {

  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer/>}/>
          <Route path='/profile' element={<Content/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}






