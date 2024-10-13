import classes from "../NavBar.module.css";
import {Friend} from "./Friend/Friend";

export const Friends = (props) => {
  let friendsElements = props.friends.map(f => <Friend avaPath={f.avaPath} name={f.name} key={f.id}/>)

  return (
    <div className={classes.sideBar}>
      <h3>Friends</h3>
      <div className={classes.sideBarFriends}>
        {friendsElements}
      </div>
    </div>
  )
}