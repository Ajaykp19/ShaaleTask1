import React from 'react';
import calender from './calender.png'

export default function Calender() {
    var a = "Se what's happening today >";
    var style = {
        position: "absolute",
        top: "1000px",
        display: "inline-flex",
        marginLeft: "8%",
        marginTop: "2080px",
        marginBottom: "100px",
        alignItems: "center"
    }
  return (
    <>
      <div className="main-container" style={style}>
        <div className="imag" style={{marginLeft: "100px", marginRight: "100px"}}>
            <img src={calender} alt="filter-paper" height="550px" />
        </div>
        <div className="text-container" style={{marginLeft: "100px", marginRight: "100px"}}>
            <div className="text">
            {/* <p className="head" style={{fontSize: "38px", color: "#831a1a", fontFamily: "cursive"}}>Access Curated Content</p> */}
            <p style={{fontSize: "45px"}}>Know about</p>
            <p style={{fontSize: "45px"}}>Upcoming Events</p>
            <p style={{fontSize: "45px"}}>in your vicinity</p>
            </div>
            <div className="browse">
                <a className="nav-link " href="" style={{color: "#154fd6", fontSize: "20px"}}>{a}</a>
            </div>
        </div>
      </div>
    </>
  );
}
