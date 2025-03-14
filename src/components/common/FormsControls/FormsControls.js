import classes from "./FormsControls.module.css";
import {Field} from "redux-form";

export const TextArea = ({input, meta: {touched, error}, ...props}) => {
  const isError = touched && error

  return (
    <div className={`${classes.formControl} ${isError && classes.error}`}>
      <textarea  {...input} {...props}/>
      {isError && <span>{error}</span>}
    </div>
  )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
  const isError = touched && error
  return (
    <div className={`${classes.formControl} ${isError ? classes.error : ""}`}>
      <input  {...input} {...props}/>
      {isError && <span>{error}</span>}
    </div>
  )
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = '') =>
  <div>
    <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>{text}
  </div>
