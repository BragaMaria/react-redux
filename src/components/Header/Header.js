import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
  debugger
  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
      <img
        src="https://html.crumina.net/html-olympus/img/logo.webp"
        alt="ggg"
      />
      </div>

      <div className={classes.loginBlock}>
        <NavLink to='/login'>{props.isAuth
          ?<div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          :"Login"}</NavLink>
      </div>


    </header>
  );
};


