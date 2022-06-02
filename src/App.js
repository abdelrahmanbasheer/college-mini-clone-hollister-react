import './main1.css';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import Login from './Login';
import Main from './Main';
import React, { useState } from 'react'
function App() {
  const [image,setImage]=useState("images/account.svg");
  const [success,setSuccess]=useState(false);
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main image={image}setImage={setImage} success={success} setSuccess={setSuccess} ></Main>}></Route>
        <Route path="Login" element={<Login image={image}setImage={setImage} success={success} setSuccess={setSuccess}></Login>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
