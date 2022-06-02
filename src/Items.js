import React, { useState } from 'react'

const Items=({success ,setSuccess})=> {
    const [available,setAvailable]=useState(true);
    const [available2,setAvailable2]=useState(false);
  return (
    <div>
      {
        success ? 
<div className='items'>
    <button onClick={(e)=>{
        e.preventDefault();
        setAvailable(true);
        setAvailable2(false);
    }} className='items-btn'>Guys</button>
    <button onClick={(e)=>{
        e.preventDefault();
        setAvailable(false);
        setAvailable2(true);
    }} className='items-btn'>Girls</button>
{
    available ? 
        <ul className='items-ul'>
<li>
  <img  src='images/short-1.webp'></img>
  <h4>Guard Swim Trunk</h4>
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/short-2.webp'></img>
  <h4>Courtside Fleece Shorts</h4>  
  <h3>19.95$</h3>
</li>
<li >
  <img  src='images/pants-1.webp'></img>
  <h4>Skinny Fleece Logo Jogger Pants</h4>  
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/pants-2.webp'></img>
  <h4>Logo Tape Fleece Skinny Jogger Pants</h4>  
  <h3>19.95$</h3>
</li>
<li>
    
  <img  src='images/KIC_323-2044-3113-900_prod1.webp'></img>
  
  <h4>Logo Icon Crew T-Shirt</h4>  
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/KIC_323-2354-3057-520_prod1.webp'></img>
  <h4>Embroidered Logo Graphic Tee</h4>  
  <h3>19.95$</h3>
</li>



        </ul>
        :
        ""
}
{
    available2 ? 
        <ul className='items-ul'>
<li>
  <img  src='images/pants-3.webp'></img>
  <h4>Ultra High-Rise White Vintage Straight Jeans</h4>
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/pants-4.webp'></img>
  <h4>Mid-Rise Ripped Medium Wash Jean Leggings</h4>  
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/dress-1.webp'></img>
  <h4>Smocked Woven Short Dress</h4>  
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/dress-2.webp'></img>
  <h4>Smocked Woven Short Dress</h4>  
  <h3>19.95$</h3>
</li>
<li>
    
  <img  src='images/KIC_323-2044-3113-900_prod1.webp'></img>
  
  <h4>Logo Icon Crew T-Shirt</h4>  
  <h3>19.95$</h3>
</li>
<li>
  <img  src='images/KIC_323-2354-3057-520_prod1.webp'></img>
  <h4>Embroidered Logo Graphic Tee</h4>  
  <h3>19.95$</h3>
</li>



        </ul>
        :
        ""
}

    </div>

        :
        <div className='login-first'>
          <h1 > Please login first to view all items available</h1>
        </div>
      }
    
    </div>
  )
}

export default Items;