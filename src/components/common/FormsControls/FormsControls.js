import classes from "./FormsControls.module.css";

export const TextArea = ({input, meta, ...props}) => {
  const isError = meta.touched && meta.error

  return (
    <div className={`${classes.formControl} ${isError && classes.error}`}>
      <textarea  {...input} {...props}/>
      {isError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const isError = meta.touched && meta.error
  console.log(typeof (meta.error));


  return (
    <div className={`${classes.formControl} ${isError ? classes.error : ""}`}>
      <input  {...input} {...props}/>
      {isError && <span>{meta.error}</span>}
    </div>
  )
}