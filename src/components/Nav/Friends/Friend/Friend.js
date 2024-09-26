import classes from "./Friend.module.css";

export const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img className={classes.avaFriend} alt='ava' src={props.avaPath}/>
      <span className={classes.name}>{props.name}</span>
  </div>);
}