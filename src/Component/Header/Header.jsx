import React, { useState } from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {FiXCircle} from 'react-icons/fi'


function Header() {
 const [isMobile,setIsMobile] = useState(false)
  return (
    <header>
         <div className="container">
            <NavLink to="/" className='logo'>Mobile</NavLink>
            <div className="bar-icons" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <FiXCircle/> :<FaBars/> }
            </div>
            <nav className={isMobile ? "nav-links nav-mobile":"nav-links"} >
                <NavLink to='/' className='link' onClick={() => setIsMobile(false)}>Products</NavLink>
                <NavLink to='/cart' onClick={() => setIsMobile(false)}><BsFillCartPlusFill className='cart-icon'/></NavLink>              
            </nav>
         </div>
    </header> 
  )
}

export default Header
 