import classes from "../Dialogs.module.css";

export const Message = (props) => {
  const {message} = {...props}
  return (
    <div className={classes.message}>{message}</div>
  )
}

