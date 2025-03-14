import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userImg from "../../../assets/images/user.jpg";
import {useState} from "react";
import {ProfileDataReduxForm} from "./ProfileDataForm";

export const ProfileInfo = ({profile, status, updateStatus, owner, savePhoto, saveProfile, ...props}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const showData =   (formData) => {
     saveProfile(formData).then(() => {
      setEditMode(false)

    })
  }


  return (
    <div>
      <div className={classes.pict}>
        <img src={profile.photos.large || userImg} alt='Img isn`t load' className={classes.pictImg}/>
        {owner === '31789' && <input type='file' onChange={onMainPhotoSelected}/>}
      </div>

      <div className={classes.descBlock}>


        {editMode
          ? <ProfileDataReduxForm initialValues={profile} profile={profile} showData={showData}/>
          : <ProfileData
            aboutMe={profile.aboutMe}
            fullName={profile.fullName}
            lookingForAJobDescription={profile.lookingForAJobDescription}
            contacts={profile.contacts}
            lookingForAJob={profile.lookingForAJob}
            owner={owner}
            goToEditMode={() => {
              setEditMode(true)
            }}
          />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

const ProfileData = ({fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts, owner, goToEditMode}) => {

  return <div>

    {owner === '31789' && <div>
      <button onClick={goToEditMode}>Edit</button>
    </div>}
    <div>Имя: {fullName}</div>

    <div><b>Ищу работу</b>: {lookingForAJob ? 'да' : 'нет'}</div>
    {
      lookingForAJob && <div><b>My professional skills</b>: {lookingForAJobDescription}</div>
    }
    <div><b>Обо мне</b>: {aboutMe}</div>
    <div><b>Контакты</b>: {
      Object.keys(contacts).map((key => {
        return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
      }))
    }</div>
  </div>
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

