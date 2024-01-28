import React,{useState} from 'react';
// import {Link} from "react-router-dom";
import shaaleLogo from './shaaleLogo.png'

export default function Header(props) {
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);
  var pos = {
    position: "fixed",
    width: "100%",
    top: "0px",
    bottom: "100%",
    margin: "0",
    padding: "0"
  };
  const handleMouseEnter = (event) => {
    // console.log(event.target.innerHTML);
    switch(event.target.innerHTML)
    {
        case "Active":
            setHovered1(true);
            break;
        case "Link":
            setHovered2(true);
            break;
        case "Subscribe":
            setHovered3(true);
            break;
        default:
            break;
    }
  };
  const handleMouseLeave = (event) => {
    // console.log(event.target.innerHTML);
    switch(event.target.innerHTML)
    {
        case "Active":
            setHovered1(false);
            break;
        case "Link":
            setHovered2(false);
            break;
        case "Subscribe":
            setHovered3(false);
            break;
        default:
            break;
    }
    
  };
    var cssNav = {
        justifyContent: "end"
      };
    var aLink1 = {
        color: isHovered1?"black":"#7FFFD4",
        backgroundColor: isHovered1?"#7FFFD4":"black",
        borderRadius: "20px",
        border: '2px solid black',
        transition: "0.5s ease-in-out"
    }
    var aLink2 = {
        color: isHovered2?"black":"#7FFFD4",
        backgroundColor: isHovered2?"#7FFFD4":"black",
        borderRadius: "20px",
        border: '2px solid black',
        transition: "0.5s ease-in-out"
    }
    var aLink3 = {
        // color: isHovered3?"black":"#7FFFD4",
        // backgroundColor: isHovered3?"#7FFFD4":"black",
        backgroundColor: "red",
        color: "black",
        borderRadius: "20px",
        border: '2px solid black',
        transition: "0.5s ease-in-out",
        fontSize: isHovered3?"1.05em":"1em"
    }
  return (
    <>
    <div style={pos}>
    <nav class="navbar py-0">
    <div className="bg-black container-fluid">
    <img src={shaaleLogo} alt="Shaale-Logo" height="50px"/>
    <div className="d-flex-end">
    <ul className="nav py-3 fs-5 justify-content-end" style={cssNav} >
  <li className="nav-item mx-4 px-0"  >
    <a className="nav-link active" style={aLink1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-current="page" href="/">Active</a>
  </li>
  <li className="nav-item mx-5"  >
    <a className="nav-link" style={aLink2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/">Link</a>
  </li>
  <li className="nav-item mx-5"   >
    <a className="nav-link" style={aLink3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/">Subscribe</a>
  </li>
  <li className="nav-item">
    {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
  </li>
</ul>
</div>
</div>
</nav>
</div>
    </>
  );
}
