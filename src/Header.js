import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({image,setImage}) {

    const [available,setAvailable]=useState(false);
    const [available2,setAvailable2]=useState(false);
   
        return (




    <div className="navbar">
        <div className="container">
            
            <nav>
                
           
                <ul className="primary-nav">
                    <li>
                        
                        <Link to="/" className="logo" >HOLLISTER</Link>
                        
                    </li>
                    
                    <li className="Girls-cta">
                        
                    <a onClick={(e)=>{
                        
                        setAvailable(!available)

                    }} style={{cursor: 'pointer'}} className="girls-hyperlink" >Girls</a>
                
                      
                       {
                           available ? 
                       <div className="hover-girls">
                        <ul id='girls-ul' className="girls-ul">
                            <li>
                                <a href="#">New Arrivals</a>
                            </li>
                            <li>
                                <a href="#">Tops</a>
                            </li>
                            <li>
                                <a href="#">Bottoms</a>
                            </li>
                            <li>
                                <a href="#">Sleepwear & Loungewear</a>
                            </li>
                            <li>
                                <a href="#">Jackets & Coats</a>
                            </li>
                            </ul>
                    
                        <img className="img-girls-hover" src="images/girls ul.webp" alt=""></img>
                    </div>
                    :
                    ""
}

                    </li>
               
                    <li className="Guys-cta">
                        
                        <a onClick={(e)=>{
                            e.preventDefault();
                            setAvailable2(!available2);
                        }} style={{cursor: 'pointer'}} className="guys-hyperlink">Guys</a>
                       { 
                       available2 ?
                     <div className="hover-guys">
                        <ul className="guys-ul">
                            <li>
                                <a href="#">New Arrivals</a>
                            </li>
                            <li>
                                <a href="#">Tops</a>
                            </li>
                            <li>
                                <a href="#">Bottoms</a>
                            </li>
                            <li>
                                <a href="#">Sleepwear & Loungewear</a>
                            </li>
                            <li>
                                <a href="#">Jackets & Coats</a>
                            </li>
                        </ul>
                        <img className="img-guys-hover" src="images/boys ul.jfif" alt=""></img>
                    </div>
                    :
                    ""
}
                    </li>
                    <li>
                        <a href="#">Jeans</a>
                    </li>
                    <li className="Sale-cta">
                        <a className="sale-hyperlink" href="#">Sale</a>

                        
                    </li>
                    <ul className="secondary-nav">
                        
                    <li>
                            <a href="#"> <img src="images/shopping-bag.svg" alt="" height="30" width="30"/> </a>
                        </li>
                      
                
                        <li>
                            <Link to="/Login">
                             <img src= {image} alt="" height="30" width="30"></img>
                            </Link>
                        </li>
                        <li>
                            <a href="#"> <img src="images/search.svg" alt="" height="30" width="30"></img></a>
                            
                        </li>
                      
                        
                    </ul>
                </ul>
            </nav> 
        </div>
    </div>
  )
}

export default Header;