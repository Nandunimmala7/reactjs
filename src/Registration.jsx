import React,{useState} from "react";
const Registration = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className="auth-form">
     <form  className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">full name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)}  name="name" id="name" placeholder="full name"/>
        <label htmlFor="email">email</label>
        <input  value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="@email.com" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input  value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
        <button type="submit">LOG-IN</button>

    </form>
    <button  onClick={ ()=>props.onFormSwitch('Login')}>Already have an account</button>
    </div>
  )
}

export default Registration