import React,{useState} from "react";
import './app.css'
import Login from "./Login";
import Registration from "./Registration";
function App() {
  const [currentForm,setCurrentForm] = useState('Login');
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }
  return ( 
    <div>
      
        { currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Registration  onFormSwitch={toggleForm}/>}
      
    </div>
  );
}

export default App;
