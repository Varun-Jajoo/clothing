import React,{useState}from "react";
import zara1 from "./zara1.jpg";
import zara2 from "./zara2.jpg";
import zara3 from "./zara3.jpg";
import fw from "./fw.jpg";
import fw1 from "./fw1.jpg";
import linkup from "./linkup.jpg";
import linkup1 from "./linkup3.jpg";
import linkup2 from "./linkup2.jpg";
import link from "./ok.png";
import "./style4.css";
import front from "./back-removebg-preview.png";
import frontleft from "./left-removebg-preview.png";
import back from "./front-removebg-preview.png";
import backl from "./fl-removebg-preview.png";
import fw2 from "./fw2.jpg";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const navigate=useNavigate();
  const [Counter, setCounter] = useState(0)
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
   function count(){
    setCounter(Counter+1);
 }
 function backto(){
  navigate('/')
 }
  return (
    <div className="contain">
      <div className="it1" style={{ fontWeight: "600" ,position:"relative"}}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#c1f377" }}>
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
      <div className="it2">
        <div
          id="carouselExampleAutoplaying4"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ fontFamily: "montserrat" }}>
            <div className="carousel-item active">
              <img
                src={linkup}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "38vw" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                className="carousel-caption d-none d-md-block text-bottom"
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "4vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "4vh",
                      left: "0",
                      top: "0",
                      color: "#a4e73f",
                    }}
                  >
                    Step Into Style
                  </span>
                  <span
                    style={{ display: "inline-block", textAlign: "center" }}
                  >
                    Discover new fashionable and comfortable clothes!!
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={linkup1}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "37vw" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                className="carousel-caption d-none d-md-block"
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "4vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "4vh",
                      left: "0",
                      top: "0",
                      color: "#a4e73f",
                    }}
                  >
                    Step Into Style
                  </span>
                  <span
                    style={{ display: "inline-block", textAlign: "center" }}
                  >
                    Discover new fashionable and comfortable clothes!!
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={linkup2}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "37vw" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                className="carousel-caption d-none d-md-block"
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "4vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "4vh",
                      left: "0",
                      top: "0",
                      color: "#a4e73f",
                    }}
                  >
                    Step Into Style
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    Discover new fashionable and comfortable clothes!!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying4"
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying4"
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="it3">
        <div>
          <span style={{ width: "100%", marginLeft: "3vw" }}>
            Unleash Your <br />
            <span style={{ width: "100%", marginLeft: "3vw", color: "orange" }}>
              Street{" "}
            </span>{" "}
            <span style={{ color: "#0093E9" }}>Style </span>
            <span> with </span>
            <br />{" "}
            <span style={{ width: "100%", marginLeft: "3vw" , whiteSpace:"nowrap"  }}>
              our New Collection
            </span>
          </span>
        </div>
        <div className="it2o">
          Shop Our Latest Collection and Discover the Hottest Streetwear-Styles
          of the Season <br />- Find the Must-Have Pieces and Fresh Looks before
          they are Gone!
        </div>
      </div>
      <div className="it4">
        <div
          id="carouselExampleAutoplaying2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ fontFamily: "montserrat" }}>
            <div className="carousel-item active">
              <img
                src={zara1}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "15vw" }}
              />
              <div className="carousel-caption d-none d-md-block text-bottom">
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "2vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "3vh",
                      left: "0",
                      top: "0",
                      color: "#FFA500",
                    }}
                  >
                    Step Into Style
                  </span>
                  <span style={{ display: "inline-block", textAlign: "left" }}>
                    Discover new fashionable and comfortable clothes!!
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={zara2}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "15vw" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "2vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "3vh",
                      left: "0",
                      top: "0",
                      color: "#FFA500",
                    }}
                  >
                    Step Into Style
                  </span>
                  <span style={{ display: "inline-block", textAlign: "left" }}>
                    Discover new fashionable and comfortable clothes!!
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={zara3}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "15vw" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "2vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "3vh",
                      left: "0",
                      top: "0",
                      color: "#FFA500",
                    }}
                  >
                    Step Into Style
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    Discover new fashionable and comfortable clothes!!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying2"
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying2"
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="it5">
        <div
          id="carouselExampleAutoplaying4"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ fontFamily: "montserrat" }}>
            <div className="carousel-item active">
              <img
                src={fw}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "15vw" }}
              />
              <div className="carousel-caption d-none d-md-block text-bottom">
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "2vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "3vh",
                      left: "0",
                      top: "0",
                      color: "yellow",
                    }}
                  >
                    Zara Fashion Week
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Experience the Latest <br /> Fashion Trends
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={fw1}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "15vw" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "2vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "3vh",
                      left: "0",
                      top: "0",
                      color: "yellow",
                    }}
                  >
                    Zara Fashion Week
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Experience the Latest <br /> Fashion Trends
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={fw2}
                className="d-block w-100"
                alt="..."
                style={{ borderRadius: "10px", height: "15vw" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "2vh",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "3vh",
                      left: "0",
                      top: "0",
                      color: "yellow",
                    }}
                  >
                    Zara Fashion Week
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "left",
                      margin: "0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Experience the Latest <br /> Fashion Trends
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying4"
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying4"
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="it6">
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
      <div className="collections">
        <div className="it7">
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
        <div className="it8">
          <div class="love" onClick={count} >
            <div class="mage" >
              <span class="line">This is a chair.</span>
            </div>
            <div >
            <span class="tit"  >Cool Chair</span>
            <span class="price">$100</span>
            </div>
          </div>
        </div>
        <div className="it">
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
        <div className="it10">
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
        <div className="it11">
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
        <div className="it12">
          <img src={link} alt="" className="link" />
          <div className="wow">
            <span>
              {" "}
              Discover our <br /> Latest Fashion
            </span>
            <button  className=" boldbut">Shop Now</button>
          </div>
        </div>
        <div className="it13">
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
        <div className="it14">
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

      <div className="it15">
        Upgrade Your Style <br /> with Our Latest Streetwear <br /> Collection.
        <div onClick={()=>{
          navigate('/main')
        }} className="next">see our latest collections</div>
      </div>
      <div className="square">
        <div className="it16">
          <div className="txt">Y2K</div>
        </div>
        <div className="it17">
          <div className="txt">Casual</div>
        </div>
        <div className="it18">
          <div className="txt">Sport</div>
        </div>
        <div className="it19">
          <div className="txt">Indian</div>
        </div>
        <div className="it20">
          <div className="bt">
            <img className="bt1" src={front} alt="" />
          </div>
        </div>
        <div className="it21">
          <div className="bt">
            <img className="bt2" src={frontleft} alt="" />
          </div>
        </div>
        <div className="it22">
          <div className="bt">
            <img className="bt2" src={backl} alt="" />
          </div>
        </div>
        <div className="it23">
          <div className="bt">
            <img className="bt3" src={back} alt="" />
          </div>
        </div>
        <div className="it24">Step Up Your Style Game.</div>
      </div>
    </div>
  );
}
