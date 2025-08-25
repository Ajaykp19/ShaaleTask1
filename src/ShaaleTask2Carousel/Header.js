import React from 'react';
// import {Link} from "react-router-dom";
import shaaleLogo from './Assets/shaaleLogo.png';

export default function Header() {
  // const [isHovered1, setHovered1] = useState(false);
  // const [isHovered2, setHovered2] = useState(false);
  // const [isHovered3, setHovered3] = useState(false);
  var pos = {
    minWidth: "1450px",
    maxWidth: "1450px",
    position: "fixed",
    // justifyContainer: "center",
    // display: "flex",
    // width: "100%",
    top: "0px",
    height: "56px",
    // left: "0",
    // right: "0",
    // bottom: "100%",
    // margin: "0",
    // padding: "0",
    // zIndex: "1",
    // display: "inline-flex",
    // alignItems: "center",
    justifyContent: "space-between",
    zIndex: "1",
    backgroundColor: "black"
    
  };

  // const handleMouseEnter = (event) => {
  //   // console.log(event.target.innerHTML);
  //   switch(event.target.innerHTML)
  //   {
  //       case "Active":
  //           setHovered1(true);
  //           break;
  //       case "Link":
  //           setHovered2(true);
  //           break;
  //       case "Subscribe":
  //           setHovered3(true);
  //           break;
  //       default:
  //           break;
  //   }
  // };


  // const handleMouseLeave = (event) => {
  //   // console.log(event.target.innerHTML);
  //   switch(event.target.innerHTML)
  //   {
  //       case "Active":
  //           setHovered1(false);
  //           break;
  //       case "Link":
  //           setHovered2(false);
  //           break;
  //       case "Subscribe":
  //           setHovered3(false);
  //           break;
  //       default:
  //           break;
  //   }
    
  // };


    // var cssNav = {
    //     justifyContent: "end"
    //   };
    // var aLink1 = {
    //     color: isHovered1?"black":"#7FFFD4",
    //     backgroundColor: isHovered1?"#7FFFD4":"black",
    //     borderRadius: "20px",
    //     border: '2px solid black',
    //     transition: "0.5s ease-in-out"
    // }
    // var aLink2 = {
    //     color: isHovered2?"black":"#7FFFD4",
    //     backgroundColor: isHovered2?"#7FFFD4":"black",
    //     borderRadius: "20px",
    //     border: '2px solid black',
    //     transition: "0.5s ease-in-out"
    // }
    // var aLink3 = {
    //     // color: isHovered3?"black":"#7FFFD4",
    //     // backgroundColor: isHovered3?"#7FFFD4":"black",
    //     backgroundColor: "red",
    //     color: "black",
    //     borderRadius: "20px",
    //     border: '2px solid black',
    //     transition: "0.5s ease-in-out",
    //     fontSize: isHovered3?"1.05em":"1em"
    // }


  return (
    <div>
        <div  className='Main-container' style={{display: "flex", backgroundColor: "black", justifyContent: "center", height: "60px"}}>
          <div className="nav" style={pos}>
              <div className="img" style={{margin: "0", padding: "0"}}>
                <li ><img src={shaaleLogo} alt="shaaleLogo" style={{height: "56px", margin: "0px"}} /></li>
              </div>
              <div style={{display: "inline-flex", margin: "0px", paddingRight: "70px", alignItems: "center"}}>
                <li style={{padding: "8px 10px"}}><a href="/" style={{paddingLeft: "10px", paddingRight: "30px", fontSize: "20px"}}>Library</a></li>
                <li style={{padding: "8px 10px"}}><button style={{paddingLeft: "30px", paddingRight: "30px", fontSize: "20px"}} className="btn btn-danger">Login</button></li>
              </div>
          </div>
        </div>
    </div>
  );
}


// {/* <div style={pos} className="">
//     <div  className="container">
//     <img src={shaaleLogo} alt="Shaale-Logo" height="50px"/>
//     <div className="d-flex-end">
//     <ul className="nav py-3 fs-5 justify-content-space-between" style={cssNav} >
//   <li className="nav-item mx-4 px-0"  >
//     <a className="nav-link active" style={aLink1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-current="page" href="/">Active</a>
//   </li>
//   <li className="nav-item mx-5"  >
//     <a className="nav-link" style={aLink2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/">Link</a>
//   </li>
//   <li className="nav-item mx-5"   >
//     <a className="nav-link" style={aLink3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/">Subscribe</a>
//   </li>
//   <li className="nav-item">
//     {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
//   // </li>
//   // </ul> */}
//   {/* </div>
//   </div>
//   </div> */}