import React, { useState } from 'react'
import Header from './Header';
const Search=({image,setImage,success,setSuccess})=> {
    const [query,setQuery]=useState("");
const items=[

{
    iname:"Guard Swim Trunk",
    iprice:"19.95$",
    image:"images/short-1.webp",
    id:"1",
},
{
    iname:"Courtside Fleece Shorts",
    iprice:"19.95$",
    image:"images/short-2.webp",
    id:"2",
},
{
    iname:"Skinny Fleece Logo Jogger Pants",
    iprice:"19.95$",
    image:"images/pants-1.webp",
    id:"3",
},
{
    iname:"Logo Tape Fleece Skinny Jogger Pants",
    iprice:"19.95$",
    image:"images/pants-2.webp",
    id:"4",
},
{
    iname:"Logo Icon Crew T-Shirt",
    iprice:"19.95$",
    image:"images/KIC_323-2044-3113-900_prod1.webp",
    id:"5",
},
{
    iname:"Ultra High-Rise White Vintage Straight Jeans",
    iprice:"19.95$",
    image:"images/pants-3.webp",
    id:"6",
},
{
    iname:"Mid-Rise Ripped Medium Wash Jean Leggings",
    iprice:"19.95$",
    image:"images/pants-4.webp",
    id:"7",
},
{
    iname:"Smocked Woven Short Dress",
    iprice:"19.95$",
    image:"images/dress-1.webp",
    id:"8",
},
{
    iname:"Smocked Woven Short Dress",
    iprice:"19.95$",
    image:"images/dress-2.webp",
    id:"9",
},
{
    iname:"Embroidered Logo Graphic Tee",
    iprice:"19.95$",
    image:"images/KIC_323-2354-3057-520_prod1.webp",
    id:"10",
},


]
const showingItems =query==="" ? items
: items.filter((item)=> item.iname.toLowerCase().includes(query.toLowerCase()))
  return (

    <div >
            
        <base href="/"/>
    
         <Header image={image} setImage={setImage}  success={success} setSuccess={setSuccess} ></Header>
        {
            success ?
            <div>
       
   
             <div className="search">
            <input className='search-input'
              type="text"
              placeholder="Enter item(s) to search for " value={query}
              onChange={((event)=>{setQuery(event.target.value)})}
              
            />
    
          </div>
        <ul className='items-av'>
    {
        showingItems.map((item)=>{
            return(
            <li key={item.id}>
                <img src={item.image}></img>
               <h3>{item.iname}</h3>
               
               <h3> {item.iprice}</h3>
            </li>
    
        )})
    }
    
        </ul>
        </div>

            :
            ""
        }

    </div>
  )
}

export default Search