import React from 'react';
import money from './money.png'

export default function Rupees() {
    var a = "Know how >";
    var style = {
        position: "absolute",
        top: "1000px",
        display: "inline-flex",
        marginLeft: "18%",
        marginTop: "1200px",
        marginBottom: "100px"
    }
  return (
    <>
      <div className="main-container" style={style}>
        <div className="imag" style={{marginLeft: "100px", marginRight: "100px"}}>
            <img src={money} alt="Rupee-symbol" height="200px" />
        </div>
        <div className="text-container" style={{marginLeft: "120px", marginRight: "100px"}}>
            <div className="text">
            <p className="head" style={{fontSize: "38px", color: "#831a1a", fontFamily: "cursive"}}>Empower your favourite artists</p>
            <p style={{fontSize: "25px"}}>Your subcription directly supports artists</p>
            <p style={{fontSize: "25px"}}>& creators you watch or Listen to!</p>
            <p style={{fontSize: "25px", fontWeight: "bold", fontFamily: "Comic Sans MS, Comic Sans, cursive"}}>Every Month!</p>
            </div>
            <div className="browse">
                <a className="nav-link " href="" style={{color: "#154fd6", fontSize: "20px"}}>{a}</a>
            </div>
        </div>
      </div>
    </>
  );
}
