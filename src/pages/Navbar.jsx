import React, { memo, useEffect, useState } from 'react'
import Logo from "../assets/logo-black.png"
import { Link, useNavigate } from 'react-router-dom';

const Navbar1 = memo(() => {


  const Navigate = useNavigate()
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])
    useEffect(_=>{


  let navLinks = document.querySelector(" .Navbar1 .nav-links");
  let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
  let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }

    } ,[])
  return (
  <div className="Navbar1"   >
    <nav >
      <div className={`navbar ${top}`} >
        <i className='bx bx-menu'></i>
        <div  className="logo"><Link to="/"> <img src={Logo} alt="Navbar"  /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><img src={Logo} alt="Navbar"  /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li  onClick={_=> Navigate("/")}><Link to="/">   تواصل معنا </Link></li>
            <li  onClick={_=> Navigate("/")}><Link to="/">   الخدمات  </Link></li>
            <li  onClick={_=> Navigate("/")}><Link to="/">    حولنا  </Link></li>
            <li  onClick={_=> Navigate("/")}><Link to="/">  الرئيسية  </Link></li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
})

export default Navbar1