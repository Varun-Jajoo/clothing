import React from 'react'
import "./main.css"
import Carousel from 'react-multi-carousel'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import filter from './filter.svg'

export const Main  = () => {
  const navigate =useNavigate();
  const [Counter, setCounter] = useState(0)
  
  function count(){
   
    setCounter(Counter+1);
 }
 function backto(){
  navigate('/')
 }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };
  const toggleDropdown3= () => {
    setDropdownOpen2(!dropdownOpen2);
  };
  return (
    <div className='main'>
     <div className="main1" style={{ backgroundColor: "#c1f377" ,fontFamily:"montserrat",fontWeight:"600"}} >
     <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid">
    <a
      style={{ fontWeight: "700", marginRight: "25vw", fontSize: "7vh" }}
      className="navbar-brand" onClick={backto}
    >
      Zephyr
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link" to="/Cart" style={{ color: "black" }}>
            <button type="button" className="btn position-relative" style={{fontSize:"2vw"}}>
              🛒 <span className={Counter ==0?"zero": "badge bg-danger position-absolute bottom-70 start-50"} style={{fontSize:"2vh"}}>{Counter}</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

     </div>
     <div className="main2">
      <div className="filter" style={{display :"flex",alignItems:"center"}}>
        <img src={filter} alt="" style={{height:"5vw",marginRight:"1vw"}}/>
        <span>Filter</span><span style={{color:'lightgray',fontSize :"3vw",marginLeft:"1vw",marginRight:"2vw",paddingBottom:"1vh"}}>|</span>
        <div class="dropdown" style={{backgroundColor:"transparent"}}>
  <button id="lol"class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"style={{backgroundColor:"yellow",}}>
    Sort
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Popular</a></li>
    <li><a class="dropdown-item" href="#">Latest</a></li>
    <li><a class="dropdown-item" href="#">Trending</a></li>
  </ul>
</div>
        
      </div>
      <div className={`gender ${dropdownOpen ? 'dropdown-open' : ''}`}>
        <div class="dropdown">
          <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" onClick={toggleDropdown} aria-expanded={dropdownOpen ? 'true' : 'false'}style={{backgroundColor:'black',color:"#c1f377"}}>
          <span style={{paddingRight:"14vw"}}>Gender</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <div class="dropdown-item">
                <input type="checkbox" id="cbx1" style={{ display: 'none' }} />
                <label for="cbx1" class="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label style={{paddingLeft:"20px"}} for="cbx1">Female</label>
              </div>
            </li>
            <li>
              <div class="dropdown-item">
                <input type="checkbox" id="cbx2" style={{ display: 'none' }} />
                <label for="cbx2" class="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label  style={{paddingLeft:"20px"}}for="cbx2">Male</label>
              </div>
            </li>
            <li>
              <div class="dropdown-item">
                <input type="checkbox" id="cbx3" style={{ display: 'none' }} />
                <label for="cbx3" class="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label style={{paddingLeft:"20px"}}for="cbx3">Unisex</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="size">
      <div className={`size ${dropdownOpen1 ? 'dropdown-open' : ''}`}>
        <div class="dropdown">
          <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" onClick={toggleDropdown2} aria-expanded={dropdownOpen1 ? 'true' : 'false'} style={{ backgroundColor: 'black', color: '#c1f377',marginBottom: dropdownOpen1 ? "9vw" : "" }}>
            <span style={{ paddingRight: '17vw' }}>Size</span>
          </button>
          <div class="dropdown-menu" style={{ display: dropdownOpen1 ? 'block' : 'none' }}>
            <div class="dropdown-item">
            <div className="contains " style={{display:"flex",marginLeft:"-18px"}}>
           
            
            <div class="drop-item">
              <button className='sizes'>S</button>
            </div>
            <div class="drop-item">
              <button className='sizes'>M</button>
            </div>
            <div class="drop-item">
              <button className='sizes'>L</button>
            </div>
            <div class="drop-item">
              <button className='sizes'>LL</button>
            </div>
            </div>
            <div className="contains" style={{display:"flex",marginLeft:"-18px"}}>
            
            <button className='sizes'>XL</button>
            
            <div class="drop-item">
              <button className='sizes'>XXL</button>
            </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="color">
      
      <div className={` ${dropdownOpen2 ? 'dropdown-open' : ''}`}>
        <div class="dropdown">
          <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" onClick={toggleDropdown3} aria-expanded={dropdownOpen2 ? 'true' : 'false'} style={{ backgroundColor: 'black', color: '#c1f377',marginBottom: dropdownOpen2 ? "9vw" : "" }}>
            <span style={{ paddingRight: '16vw' }}>Color</span>
          </button>
          <div class="dropdown-menu" style={{ display: dropdownOpen2 ? 'block' : 'none' }}>
            <div class="dropdown-item">
            
           
            
            <div class="drop-item">
              
            </div>
            <div class="drop-item">
             
            </div>
            <div class="drop-item">
              
            </div>
            <div class="drop-item">
            
            </div>
                  
            <div class="drop-item">
              
            </div>
            
            
            </div>
          </div>
        </div>
      </div>
    
      </div>
      <div className="price">
      Price
      <div className="range" style={{width:"90%"}}>
      <label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2"/>
      </div>
    </div>
    </div>
   
     <div className="main3">
     <Carousel responsive={responsive} itemClass="btn">
          <div>
            <h3>All</h3>
          </div>
          <div>
            <h3>T-Shirts</h3>
          </div>
          <div>
            <h3>Jackets</h3>
          </div>
          <div>
            <h3>Bottom</h3>
          </div>
          <div>
            <h3>Cap</h3>
          </div>
          <div>
            <h3>Belts</h3>
          </div>
          <div>
            <h3>Bags </h3>
          </div>
          <div>
            <h3>Accessories</h3>
          </div>
          <div>
            <h3>Watches</h3>
          </div>
          <div>
            <h3>Sunglasses</h3>
          </div>
          <div>
            <h3>Socks</h3>
          </div>
        </Carousel>
     </div>
     <div className="main4">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
     </div>
     <div className="main5">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
     </div>
     <div className="main6">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
     </div>
     <div className="main7">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div> 
     </div>
     <div className="main8">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div> 
     </div>
     <div className="main9">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
     </div>
     <div className="main10">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
     </div>
     <div className="main11">
     <div class="love" onClick={count}>
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
     </div>

     </div>

   
  )
}
