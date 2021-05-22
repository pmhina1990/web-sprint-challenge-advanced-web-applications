//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
import React, { useState } from "react";
import axios from "axios";

const Login = () => {

  const emptyLog ={
    username: "",
    password: "",
  }
  const [log,setLog]= useState(emptyLog)
  

  const handleChange =(e)=>{
  setLog({...log,[e.target.name]: e.target.value})}

  const login =(e)=>{
    e.preventDefault()
    if(!e.target.username || !e.target.password){
      alert("Please enter correct Username and Password")
    }else{
      axios.post("http://localhost:5000/api/login", log)
      .then((res)=>{
        localStorage.setItem("token",res.data.payload)
        window.location.href = './protected'
      })
      .catch((err)=>{console.log('Login Erro:'+ err)})
    }
  }
  // // make a post request to retrieve a token from the api
  // // when you have handled the token, navigate to the BubblePage route

  // useEffect(()=>{
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // });
  
  // const error = "";
  // //replace with error state

  return (
//     <div>
//       <h1>Welcome to the Bubble App!</h1>
//       <div data-testid="loginForm" className="login-form">
//         <h2>Build login form here</h2>
//       </div>

//       <p data-testid="errorMessage" className="error">{error}</p>
//     </div>
//   );
// };
<div>

    <h1>Welcome to the Bubble App!</h1>

    <form onSubmit={login}>
      <h2>Login</h2>
      <label>
        User Name:  
        <input 
          type='text'
          placeholder='User Name'
          name='username'
          value={log.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password: 
        <input 
          type='password'
          placeholder='password'
          name='password'
          value={log.password}
          onChange={handleChange}
        />
      </label>

      <button type='submit'> Log In</button>

    </form>

  </div>
)
}

export default Login;

