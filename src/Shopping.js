import React from 'react'
import Header from './Header';
const shopping=({image,setImage, success ,setSuccess})=> {
  return (
    <div>
  <Header image={image} setImage={setImage}></Header>
    </div>
  )
}

export default shopping;