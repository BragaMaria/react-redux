import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state)=>{
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}