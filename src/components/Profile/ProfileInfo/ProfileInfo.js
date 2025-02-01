import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
    <div className={classes.pict}>
      <img src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt='img'/>
    </div>

      <div className={classes.descBlock}>
        Name:{props.profile.fullName}

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};


