import classes from "./FormsControls.module.css";


const FormControl = ({input, meta, child , ...props})=>{
  const isError = meta.touched && meta.error

  return (
    <div className={`${classes.formControl} ${isError && classes.error}`}>
      {props.child}
      {isError && <div><span>{meta.error}</span></div>}
    </div>
  )
}

export const TextArea = ({input, meta, ...props}) => {
  const isError = meta.touched && meta.error

  return (
    <div className={`${classes.formControl} ${isError && classes.error}`}>
      <textarea  {...input} {...props}/>
      {isError && <div><span>{meta.error}</span></div>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const isError = meta.touched && meta.error

  return (
    <div className={`${classes.formControl} ${isError && classes.error}`}>
      <input  {...input} {...props}/>
      {isError && <div><span>{meta.error}</span></div>}
    </div>
  )
}