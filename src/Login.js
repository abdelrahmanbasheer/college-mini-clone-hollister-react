import React, { useState } from 'react'
import Header from './Header';
function Login({image,setImage, success ,setSuccess}) {

const users=[
{
username:"omar",
password :"123",
avatar:"images/omar.png",
},
{
  username:"abdelrahman",
  password :"123",
  avatar:"images/free.png",
},
{
  username:"ali",
  password :"123",
  avatar:"images/aley.png",
},
{
  username:"ahmed",
  password :"123",
  avatar:"images/ahmed.png",
},


]
const handleSubmit = (event) => {

  event.preventDefault();

  var { uname, pass } = document.forms[0];

  
  const userData = users.find((user) => user.username === uname.value);


  if (userData) {
    if (userData.password !== pass.value) {
     
    setError(true);
    setSuccess(false);
    setLogout(false);
    setImage("images/account.svg")
    } else {
setImage(userData.avatar)
    setError(false);
    setSuccess(true);
    setLogout(false);
    }
  } else {
    
    setError(true);
    setSuccess(false);
    setLogout(false);
    setImage("images/account.svg")
  }
};


const [error,setError]=useState(false);

const [logout,setLogout]=useState(false);
  return (
    
    <div style={{
  
    }}>
    <Header image={image} setImage={setImage}></Header>
    <div className='background'>
    <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        
      </div>
      <div className="button-container">
        <input className='button-login' type="submit" />
      </div>
  
     
    </form>
    <div >
      <button  className='button-logout' onClick={()=>{setImage("images/account.svg");setSuccess(false);setLogout(true) ;setError(false)}}>Logout</button>
    </div>
    
  </div>
  </div>
{
  error ?
  <div className='error'>
 incorrect username or password
  </div>
  :
  ""
}
{
  logout ?
  <div className='logout'>
    user logged out succesfully
  </div>
  :
  ""
}

{
  success ? 
  <div  className='success'>
 user logged in succesfully 
 
   </div>
   
   :
   ""
}

  </div>
  
  )
}

export default Login;