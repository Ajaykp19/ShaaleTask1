import React from 'react';
import nutDirec from './nutDire.png'

export default function Possibilities() {
    var style = {
        position: "absolute",
        top: "1000px",
        display: "inline-flex",
        marginLeft: "18%",
        marginTop: "780px",
        marginBottom: "100px"
    }
    var a = "Know how >";
  return (
    <>
      <div className="main-container" style={style}>
        <div className="imag" style={{marginLeft: "100px", marginRight: "100px"}}>
            <img src={nutDirec} alt="Multiple-directions" height="200px" />
        </div>
        <div className="text-container" style={{marginLeft: "95px", marginRight: "100px"}}>
            <div className="text">
            <p className="head" style={{fontSize: "38px", color: "#831a1a", fontFamily: "cursive"}}>One Song, Many Possibilities</p>
            <p style={{fontSize: "25px"}}>Watch/Learn/Teach</p>
            {/* <p style={{fontSize: "25px"}}>Albums, Archives, Podcasts, Lec-dems,</p>
            <p style={{fontSize: "25px"}}>Short Videos & more</p> */}
            </div>
            <div className="browse">
                <a className="nav-link " href="" style={{color: "#154fd6", fontSize: "20px"}}>{a}</a>
            </div>
        </div>
      </div>
    </>
  );
}
