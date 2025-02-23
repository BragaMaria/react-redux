import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import classes from "../common/FormsControls/FormsControls.module.css";


const LoginForm = ({handleSubmit, showData, error}) => {
  return (
    <form onSubmit={handleSubmit(showData)}>
      {CreateField('Email', 'email', [required], Input)}
      {CreateField('Password', 'password', [required,
        maxLengthCreator(50)], Input, {type:'password'})}
      <div className={classes.flexBlock}>
        {CreateField(null, 'rememberMe', [], Input, {type:'checkbox'}, 'remember me')}
      </div>
      <div className={classes.formSummaryError}>
        {error}
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