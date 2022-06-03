import './main1.css';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import Login from './Login';
import Main from './Main';
import React, { useState } from 'react'
import Shopping from './Shopping';
import Search from './Search';
function App() {
  const [image,setImage]=useState("images/account.svg");
  const [success,setSuccess]=useState(false);
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main image={image}setImage={setImage} success={success} setSuccess={setSuccess} ></Main>}></Route>
        <Route path="Login" element={<Login image={image}setImage={setImage} success={success} setSuccess={setSuccess}></Login>}></Route>
        <Route path="Shopping" element={<Shopping image={image}setImage={setImage} success={success} setSuccess={setSuccess}></Shopping>}></Route>
        <Route path="Search" element={<Search image={image}setImage={setImage} success={success} setSuccess={setSuccess}></Search>}></Route>
        <Route path="Login/Search" element={<Search image={image}setImage={setImage} success={success} setSuccess={setSuccess}></Search>}></Route>
        <Route path="Login/Shopping" element={<Shopping image={image}setImage={setImage} success={success} setSuccess={setSuccess}></Shopping>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
