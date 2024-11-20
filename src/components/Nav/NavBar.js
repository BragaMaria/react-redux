import classes from './NavBar.module.css';
import {FriendsContainer} from "./FriendsContainer";
import {NavLink} from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navBar}>
        <div className={classes.item}>
          <NavLink to='/profile/31789'>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/users'>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/settings'>Settings</NavLink>
        </div>

      </div>
      <FriendsContainer/>
    </nav>
  );
};


