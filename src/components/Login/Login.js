import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import classes from "../common/FormsControls/FormsControls.module.css";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.showData)}>
      <div>
        <Field placeholder='Email' name={'email'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder='Password' name={'password'} type={'password'} component={Input}
               validate={[required, maxLengthCreator(50)]}/>
      </div>
      <div className={classes.flexBlock}>
        <Field type='checkbox' name={'rememberMe'} component={Input}/>
        remember me
      </div>
      <div className={classes.formSummaryError}>
        {props.error}
      </div>
      <div>
        <button type={"submit"}>Login</button>
      </div>
    </form>)
}


const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const showData = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    console.log(formData);
  }




  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm showData={showData}/>
    </div>
  )
}

const mstp = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mstp, {login, logout})(Login)