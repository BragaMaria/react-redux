import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = ({profile,status,updateStatus,...props}) => {
  if(!profile){
    return <Preloader/>
  }
  return (
    <div>
    <div className={classes.pict}>
      <img src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt='img'/>
    </div>

      <div className={classes.descBlock}>
        Name:{profile.fullName}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};


