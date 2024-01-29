import React from 'react';
import target from './target.png'

export default function Target() {
    // var a = "Browse >";
    var style = {
        position: "absolute",
        top: "1000px",
        display: "inline-flex",
        marginLeft: "18%",
        marginTop: "1680px",
        marginBottom: "100px"
    }
  return (
    <>
      <div className="main-container" style={style}>
        <div className="imag" style={{marginLeft: "100px", marginRight: "100px"}}>
            <img src={target} alt="target" height="200px" />
        </div>
        <div className="text-container" style={{marginLeft: "90px", marginRight: "100px"}}>
            <div className="text">
            <p className="head" style={{fontSize: "38px", color: "#831a1a", fontFamily: "cursive"}}>Engage without distractions</p>
            <p style={{fontSize: "25px"}}>Stay focused & delve into the world of arts</p>
            <p style={{fontSize: "25px"}}>with a clutter-free, dedicated platform</p>
            {/* <p style={{fontSize: "25px"}}>Short Videos & more</p> */}
            </div>
            {/* <div className="browse">
                <a className="nav-link " href="" style={{color: "#154fd6", fontSize: "20px"}}>{a}</a>
            </div> */}
        </div>
      </div>
    </>
  );
}
