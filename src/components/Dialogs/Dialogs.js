import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from 'react'
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Field component={'textarea'} name={'message'} placeholder={'Enter your message'}></Field>
      <button type={'submit'}>Add message</button>
    </form>
  )
}

const MessageReduxForm = reduxForm({
  form: "message"
})(MessageForm)

export const Dialogs = (props) => {
  const {dialogs, messages} = {...props.state}

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} avaPath={d.avaPath} key={d.id}/>);
  let messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>);
  let onSubmit = (values) => {
    props.addMessage(values.message)
    values.message = ''
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
        <MessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
}


