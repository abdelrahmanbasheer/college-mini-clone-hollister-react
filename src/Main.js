import React from 'react'
import Header from './Header';
import Container1 from './Container1';
import Items from './Items';
const Main=({image,setImage})=> {
  return (
      <div>
    <Header image={image} setImage={setImage}></Header>
    <Container1></Container1>
    <Items></Items>
    </div>
  )
}

export default Main;