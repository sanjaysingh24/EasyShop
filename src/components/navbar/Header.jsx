import React from 'react'
import { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'
import './navbar.css'
const Header = () => {
const[menu,setMenu] = useState("shop");  
  
  return (

    <>
    <nav class="navbar navbar-expand-lg custom-nav ">
  <div class="container">
    <a class="navbar-brand" href="#">
    <p className='main-logo'>  <img src="./img/EASYSHOP.png" alt=""  className='img-fluid w-75'/></p>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item"onClick={()=>setMenu("shop")}>  <Link style={{textDecoration:"none"}}  className ="text-dark"to='/'>Shop</Link>     {menu==="shop"?<hr></hr>:<></>} </li>
        <li class="nav-item"onClick={()=>setMenu("men")}>     <Link style={{textDecoration:"none"}} className ="text-dark"  to='/men'>Men</Link>   {menu==="men"?<hr></hr>:<></>}</li>
        <li class="nav-item"onClick={()=>setMenu("women")}>     <Link style={{textDecoration:"none"}} className ="text-dark" to ='/women'>Women</Link> {menu==="women"?<hr></hr>:<></>}</li>
        <li class="nav-item"onClick={()=>setMenu("kids")}>      <Link style={{textDecoration:"none"}} className='text-dark' to='/kids'>Kids</Link> {menu==="kids"?<hr></hr>:<></>}</li>
       
        
      </ul>
      <div className='nav_Login '>
    <Link to='/login'>  <button type="button" class="btn btn-primary me-4">Login</button></Link>
      <Link to ='/cart'>  <img src="./Assets/cart_icon.png" alt="cart_icon" className='img-fluid' /></Link>
        <div className='cart_count'>0</div>
      </div>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
