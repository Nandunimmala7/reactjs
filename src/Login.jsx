import React,{useState} from "react";
const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
     

    }
  return (
    <div className="auth-form">
    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input  value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="@email.com" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input  value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
        <button type="submit">LOG-IN</button>

    </form>
    <button onClick={ ()=>props.onFormSwitch('Registration')}>don't have an account? Register</button>
    </div>
  )
}

export default Login