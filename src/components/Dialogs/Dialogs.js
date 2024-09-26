import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
  const {dialogs, messages} = {...props.state}

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} avaPath={d.avaPath}/>);
  let messagesElements = messages.map(m => <Message message={m.message}/>);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

