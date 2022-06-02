import React from 'react'
import Header from './Header';
import Container1 from './Container1';
import Items from './Items';
const Main=({image,setImage,success, setSuccess})=> {
  return (
      <div>
    <Header image={image} setImage={setImage}  success={success} setSuccess={setSuccess} ></Header>
    <Container1></Container1>
    <Items  success={success} setSuccess={setSuccess}></Items>
    </div>
  )
}

export default Main;