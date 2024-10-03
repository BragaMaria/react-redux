import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  let updateMessage = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
   <Dialogs state={props.store.getState().dialogsPage}
            newMessageText={props.newMessageText}
            addMessage={addMessage}
            updateNewMessageText={updateMessage}/>
  );
}

