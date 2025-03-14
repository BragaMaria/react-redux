import {CreateField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, showData,profile,error}) => {
  return <form onSubmit={handleSubmit(showData)}>
    <button>Save</button>
    {error && <div className={style.formSummaryError}>
      {error}
    </div>}
    <div><b>Имя: {CreateField('Имя', 'fullName', [], Input)}</b></div>
    <div><b>Ищу работу</b>: {CreateField('', 'lookingForAJob',[],Input,{type:'checkbox'})}</div>
     <div><b>My professional skills</b>:
       {CreateField('My professional skills', 'lookingForAJobDescription',[],TextArea)}
     </div>

    <div><b>Обо мне</b>:
      {CreateField('About me', 'aboutMe',[],TextArea)}
    </div>

    <div><b>Контакты</b>: {
      Object.keys(profile.contacts).map((key => {
        return <div key={key} className={classes.contact}>
          <b>{key}:</b> {CreateField(key, 'contacts.'+ key, [], Input)}

        </div>
      }))
    }</div>

  </form>

}

export const ProfileDataReduxForm = reduxForm({form:'edit-profile', destroyOnUnmount: false})(ProfileDataForm)