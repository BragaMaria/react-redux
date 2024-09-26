import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
  const {
    name, id, avaPath
  } = {...props}
  return (
    <div className={classes.dialog}>
      <img alt='ava' src={avaPath} className={classes.ava}/>
      <NavLink to={'/dialogs/' + id} className={navData => navData.isActive ? classes.active : classes.dialog}>
        {name}
      </NavLink>
    </div>
  )
}

