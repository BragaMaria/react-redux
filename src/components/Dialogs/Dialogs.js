import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from 'react'

export const Dialogs = (props) => {
  const {dialogs, messages} = {...props.state}

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} avaPath={d.avaPath}/>);
  let messagesElements = messages.map(m => <Message message={m.message}/>);

  let newMessageElement = React.createRef();
  let addMessage = ()=>{
    let text = newMessageElement.current.value;
    alert(text)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
}

