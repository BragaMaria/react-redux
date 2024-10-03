import "./App.css";
import {Content} from "./components/Profile/Content.js";
import {Header} from "./components/Header/Header.js";
import {NavBar} from "./components/Nav/NavBar.js";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export const App = () => {

  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      {/*<NavBar state={props.state.sideBar}/>*/}

      <div className="app-wrapper-content">

        <Routes>
          {/*<Route path="/dialogs/*" element={<DialogsContainer store={props.store} newMessageText={props.state.dialogsPage.newMessageText}/>}/>*/}
          {/*<Route path="/profile" element={<Content profilePage={props.state.profilePage} store={props.store}/>}/>*/}
          <Route path="/dialogs/*" element={<DialogsContainer/>}/>
          <Route path='/profile' element={<Content/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>


      </div>
    </div>
  );
}






