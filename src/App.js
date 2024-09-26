import "./App.css";
import {Content} from "./components/Profile/Content.js";
import {Header} from "./components/Header/Header.js";
import {NavBar} from "./components/Nav/NavBar.js";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


export const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar state={props.state.sideBar}/>

      <div className="app-wrapper-content">

          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />}/>
            <Route path="/profile" element={<Content state={props.state.profilePage}/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>


      </div>
    </div>
  );
}






