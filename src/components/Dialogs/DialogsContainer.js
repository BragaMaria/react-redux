import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {
  debugger;
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let addMessage = () => {
            store.dispatch(addMessageActionCreator())
          }

          let updateMessage = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text))
          }

          return (
            <Dialogs state={store.getState().dialogsPage}
                     newMessageText={store.getState().dialogsPage.newMessageText}
                     addMessage={addMessage}
                     updateNewMessageText={updateMessage}/>)
        }
      }
    </StoreContext.Consumer>
  );
}

