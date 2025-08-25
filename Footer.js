import React,{useState} from 'react';
import appleStore from './appleStore.png'
import play from './play.png'


export default function Footer() {
  var [hover1, setHover1] = useState(false)
  var [hover2, setHover2] = useState(false)
  var [hover3, setHover3] = useState(false)
  var [hover4, setHover4] = useState(false)
  var [hover5, setHover5] = useState(false)
  var [hover6, setHover6] = useState(false)
  var [hover7, setHover7] = useState(false)
  var [hover8, setHover8] = useState(false)
  var [hover9, setHover9] = useState(false)
  var [hover10, setHover10] = useState(false)
  var [hover11, setHover11] = useState(false)
  var handleOn = (value)=>{
    switch(value)
    {
      case "twitter":
        setHover1(true)
        break;
      case "face":
        setHover2(true)
        break;
      case "you":
        setHover3(true)
        break;
      case "ig":
        setHover4(true)
        break;
      case "about":
        setHover5(true)
        break;
      case "team":
        setHover6(true)
        break;
      case "profile":
        setHover7(true)
        break;
      case "refer":
        setHover8(true)
        break;
      case "subscribe":
        setHover9(true)
        break;
      case "gift":
        setHover10(true)
        break;
      case "support":
        setHover11(true)
        break;
    }
  }
  var handleOff = (value)=>{
    switch(value)
    {
      case "twitter":
        setHover1(false)
        break;
      case "face":
        setHover2(false)
        break;
      case "you":
        setHover3(false)
        break;
      case "ig":
        setHover4(false)
        break;
      case "about":
        setHover5(false)
        break;
      case "team":
        setHover6(false)
        break;
      case "profile":
        setHover7(false)
        break;
      case "refer":
        setHover8(false)
        break;
      case "subscribe":
        setHover9(false)
        break;
      case "gift":
        setHover10(false)
        break;
      case "support":
        setHover11(false)
        break;
    }
  }
  // var handleOn1 = ()=>{
  //   setHover1(true);
  // }
  // var handleOff1 = ()=>{
  //   setHover1(false);
  // }
  var style = {
    position: "absolute",
    top: "1999px",
    // marginLeft: "1%",
    marginTop: "5550px",
    // textAlign: "center",
    backgroundColor: "#1a1818",
    // borderRadius: "9px",
    padding: "80px",
    // height: "410px",
    width: "100%",
    // display: "inline-flex"
    alignItems: "center",
    paddingBottom: "120px"
    
}
  return (
    <>
      <div className="main-container" style={style}>
        <div className="container">
        <div className="row" >
            <div className="col-4" >
                <p style={{fontSize: "20px", fontWeight: "bold", marginBottom: "15px"}}>Company</p>
                  {/* <div> */}
                  <li style={{marginBottom: "15px"}}><a href="" style={{color: hover5?"white":"grey"}} onMouseEnter={()=>handleOn("about")} onMouseLeave={()=>handleOff("about")}>About us</a></li>
                  {/* </div> */}
                  {/* <div></div> */}
                  <li style={{marginBottom: "15px"}}><a href="" style={{color: hover6?"white":"grey"}} onMouseEnter={()=>handleOn("team")} onMouseLeave={()=>handleOff("team")}>Team</a></li>         
            </div>
            <div className="col-4">
                <p style={{fontSize: "20px", fontWeight: "bold"}}>Creators</p>
                <li style={{marginBottom: "15px"}}><a href="" style={{color: hover7?"white":"grey"}} onMouseEnter={()=>handleOn("profile")} onMouseLeave={()=>handleOff("profile")}>Create your profile</a></li>
                <li style={{marginBottom: "15px"}}><a href="" style={{color: hover8?"white":"grey"}} onMouseEnter={()=>handleOn("refer")} onMouseLeave={()=>handleOff("refer")}>Refer & Earn</a></li>          
            </div>
            <div className="col-4">
                <div>
                <p style={{fontSize: "20px", fontWeight: "bold"}}>Community</p>
                <li style={{marginBottom: "15px"}}><a href="" style={{color: hover9?"white":"grey"}} onMouseEnter={()=>handleOn("subscribe")} onMouseLeave={()=>handleOff("subscribe")}>Subscribe</a></li>
                <li style={{marginBottom: "15px"}}><a href="" style={{color: hover10?"white":"grey"}} onMouseEnter={()=>handleOn("gift")} onMouseLeave={()=>handleOff("gift")}>Gift a subscription</a></li>  
                <li style={{marginBottom: "15px"}}><a href="" style={{color: hover11?"white":"grey"}} onMouseEnter={()=>handleOn("support")} onMouseLeave={()=>handleOff("support")}>Support</a></li>  
                </div>
                <div className="icons" style={{fontSize: "30px",display: "flex", justifyContent: "space-between", width: "250px", marginBottom: "40px"}}>
                <a href="" id="twi" style={{color: hover1?"white":"grey"}} onMouseEnter={()=>handleOn("twitter")} onMouseLeave={()=>handleOff("twitter")} ><i className="fa-brands fa-twitter"></i></a>
                <a href="" style={{color: hover2?"white":"grey"}} onMouseEnter={()=>handleOn("face")} onMouseLeave={()=>handleOff("face")}><i className="fa-brands fa-facebook"></i></a>
                <a href="" style={{color: hover3?"white":"grey"}} onMouseEnter={()=>handleOn("you")} onMouseLeave={()=>handleOff("you")}><i className="fa-brands fa-youtube"></i></a>
                <a href="" style={{color: hover4?"white":"grey"}} onMouseEnter={()=>handleOn("ig")} onMouseLeave={()=>handleOff("ig")}><i className="fa-brands fa-instagram"></i></a>
                {/* FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                </div>
                <div className="app" style={{display: "inline-flex", }}>
                  <div className="apple" style={{marginLeft: "10px", marginRight: "10px"}}>
                    <li><a href=""><img src={appleStore} alt="app-store" height="40px"/></a></li>
                  </div>
                  <div className="play" style={{marginLeft: "10px", marginRight: "10px"}}>
                    <li><a href=""><img src={play} alt="play-store" height="40px"/></a></li>
                  </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}
//onMouseLeave={handleOff}
