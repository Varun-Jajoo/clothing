import React from 'react';

import untitledButtonsImage from './Untitledbuttons.jpg';
import hoodieimage from './hoodie.jpg';
import model3 from './nog-removebg-preview.png'
import './style.css';
import './style2.css';
import './style3.css';
import zara1 from './zara1.jpg';
import zara2 from './zara2.jpg';
import zara3 from './zara3.jpg';
import fw from './fw.jpg'
import fw1 from './fw1.jpg'
import fw2 from './fw2.jpg'
import transcend from './transcend.png';
import model1 from './model1-removebg-preview.png';
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div className="container1">
      
      <div class="myCard">
        <div class="innerCard">
            <div class="frontSide" style={{overflow :"hidden"}}>
              <span className='varun'><span className='text'>EM<span style={{color:""}}>B</span>RACE</span>
              <img style={{width :"35vh",height:"37vh"}} className='model2' src={transcend} alt="" />
            </span>
            </div>
            <div class="backSide">
                <p class="title">
                  <span style={{color :"white"}}>Embrace</span> <br /> <span style={{color :"white"}}>the</span> <span>Kaleidoscope</span> <br /><span style={{color :"white"}} >of Life.</span>
                  </p>
            </div>
        </div>
    </div>
      
    <div id="item2"class="container">
  <div class="card">
    <img className="model1" src={model1} alt="" />
  </div>
</div>
      <div className="item3" style={{ backgroundColor: "#ffdf00" }}>
        <div className="a1" style={{ height: "6vw", marginTop: "1vw", marginBottom: "1vw", fontSize: "4vh", textAlign: "center" }}>
          Step Up Your  <br />Style Game
        </div>
        <img src={hoodieimage} alt="" style={{ borderRadius: "10px", width: "15vw", height: "20vw" }} />
      </div>
      <div className="item4">
        <div className="a1" style={{ margin: "auto", letterSpacing: "2px" }}>
         1300.00
        </div>
        <button style={{ height: "6vh", margin: "auto", textAlign: "center" }} type="button" className="btn btn-dark"> Buy </button>
      </div>
      <div className="item5">
        <div className="a1" style={{ width: "15vw", height: "15vw" }}>
          Many <br /> Categories <br /> Many <br /> Options
        </div>
        <div className="butt">
          <img src={untitledButtonsImage} alt="" style={{ borderRadius: "10px", width: "15vw", height: "13vw" }} />
        </div>
      </div>
      <div className="item6">
      <div id="carouselExampleAutoplaying1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{ fontFamily: "montserrat" }}>
            <div className="carousel-item active">
              <img src={fw} className="d-block w-100" alt="..." style={{ borderRadius: "10px", height: "11vw" }} />
              <div className="carousel-caption d-none d-md-block text-bottom">
                <div style={{ position: "absolute", bottom: "0", fontSize: "2vh", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vh", left: "0", top: "0", color: "yellow" }}>Zara Fashion Week</span>
                  <span style={{ display: "inline-block", textAlign: "left" ,whiteSpace :"nowrap"}}>Experience the Latest <br /> Fashion Trends</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={fw1} className="d-block w-100" alt="..." style={{ borderRadius: "10px", height: "11vw" }} />
              <div className="carousel-caption d-none d-md-block">
                <div style={{ position: "absolute", bottom: "0", fontSize: "2vh", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vh", left: "0", top: "0", color: "yellow" }}>Zara Fashion Week</span>
                  <span style={{ display: "inline-block", textAlign: "left" ,whiteSpace :"nowrap"}}>Experience the Latest <br /> Fashion Trends</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={fw2} className="d-block w-100" alt="..." style={{ borderRadius: "10px", height: "11vw" }} />
              <div className="carousel-caption d-none d-md-block">
                <div style={{ position: "absolute", bottom: "0", fontSize: "2vh", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vh", left: "0", top: "0", color: "yellow" }}>Zara Fashion Week</span>
                  <span style={{ display: "inline-block", textAlign: "left", margin: "0" ,whiteSpace :"nowrap"}}>Experience the Latest <br /> Fashion Trends</span>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="item7">
        <div id="carouselExampleAutoplaying3" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{ fontFamily: "montserrat" }}>
            <div className="carousel-item active">
              <img src={zara1} className="d-block w-100" alt="..." style={{ borderRadius: "10px", height: "11vw" }} />
              <div className="carousel-caption d-none d-md-block text-bottom">
                <div style={{ position: "absolute", bottom: "0", fontSize: "2vh", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vh", left: "0", top: "0", color: "#FFA500" }}>Step Into Style</span>
                  <span style={{ display: "inline-block", textAlign: "left" }}>Discover new fashionable and comfortable clothes!!</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={zara2} className="d-block w-100" alt="..." style={{ borderRadius: "10px", height: "11vw" }} />
              <div className="carousel-caption d-none d-md-block">
                <div style={{ position: "absolute", bottom: "0", fontSize: "2vh", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vh", left: "0", top: "0", color: "#FFA500" }}>Step Into Style</span>
                  <span style={{ display: "inline-block", textAlign: "left" }}>Discover new fashionable and comfortable clothes!!</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={zara3} className="d-block w-100" alt="..." style={{ borderRadius: "10px", height: "11vw" }} />
              <div className="carousel-caption d-none d-md-block">
                <div style={{ position: "absolute", bottom: "0", fontSize: "2vh", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                  <span style={{ fontWeight: "bold", fontSize: "3vh", left: "0", top: "0", color: "#FFA500" }}>Step Into Style</span>
                  <span style={{ display: "inline-block", textAlign: "left", margin: "0", }}>Discover new fashionable and comfortable clothes!!</span>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="item8">
      <div className="b1"></div>
        <div className="b2">
          Unleash <br />Your <span className='ok'>2023</span>  <br />Street Style
        </div>
        <div className="b3">
           <span style={{marginLeft :"2vw" ,color:"orange"}}>Upgrade</span> <br /> <span style={{marginLeft :"1vw"}}>Your</span> <span style={{color:" #3399CC"}}> Style</span>
        </div>
        <div className="b4">
        Shop Our Latest Collection and Discover <br /> the Hottest Streetwear-Styles of the Season <br /> - Find the Must-Have Pieces and Fresh Looks <br /> before they are Gone!       </div>
      </div>
      <div className="item9">
       <span className='logo'>ZEPHYR</span> 
       <div className="img"><img  style={{alignItems:"center",height :"37vh",width :"17vw"}}src={model3} alt="" />
      <div className="boss">
        Streetwear for Everybody.
      </div>
      </div>
      </div>
      <div className="welcome" style={{fontFamily:"montserrat"}}>
        <p style={{fontFamily:"Leisha",left:"82px",alignItems:"center",fontSize:"5vw",position:"absolute",top:"50px"}}>Zephyr</p>
<p style={{marginLeft:"2vw"}}>Ignite your style with our ethereal fashion universe. </p> <p style={{marginLeft:"2vw"}}>Unleash your creativity and embrace the extraordinary.</p>
</div>

      <Link to="/home"className="but1">Dress like a Cosmic Disco Ball! </Link>

    </div>
    
  );
}
