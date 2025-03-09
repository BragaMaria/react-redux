import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userImg from "../../../assets/images/user.jpg";

export const ProfileInfo = ({profile,status,updateStatus,owner,savePhoto,...props}) => {
  if(!profile){
    return <Preloader/>
  }

  const onMainPhotoSelected = (e)=>{
    if (e.target.files.length){
      savePhoto(e.target.files[0])
    }
  }


  return (
    <div>
    <div className={classes.pict}>
      <img src={profile.photos.large || userImg} alt='Img isn`t load' className={classes.pictImg}/>
      {owner==='31789' && <input  type='file' onChange={onMainPhotoSelected}/>}
    </div>

      <div className={classes.descBlock}>
        Имя: {profile.fullName}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};


