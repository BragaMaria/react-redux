import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
  return(

    <form onSubmit={props.handleSubmit(props.showData)}>
      <div>
        <Field placeholder='Login' name={'login'} component={'input'}/>
      </div>
      <div>
        <Field placeholder='Password' name={'password'} component={'input'}/>
      </div>
      <div>
        <Field type='checkbox' name={'rememberMe'} component={'input'}/> remember me
      </div>
      <div>
        <button type={"submit"}>Login</button>
      </div>
    </form>)
}



const LoginReduxForm = reduxForm({
  form:'login'
})(LoginForm)

const Login = ()=>{
  const showData = (formData)=>{
    console.log(formData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm showData={showData}/>
    </div>
  )
}

export default Login