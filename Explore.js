import React from 'react';

export default function Explore() {
    var pos = {
        position: "absolute",
        marginTop: "800px",
        marginLeft: "8%",
        textAlign: "center"
    }
  return (
    <>
    <div className="container" style={pos}>
      <div className="heading">
        <h1 style={{marginBottom: "90px"}}>Explore</h1>
      </div>
      <div className="music my-5">
        <button className="btn btn-danger mx-5" style={{height: "60px", paddingLeft: "20px", paddingRight: "20px", width: "280px"}}><p style={{marginTop: "10px", fontSize: "20px"}}>CARNATIC MUSIC</p></button>
        <button className="btn btn-danger mx-5" style={{height: "60px", paddingLeft: "20px", paddingRight: "20px", width: "280px"}}><p style={{marginTop: "10px", fontSize: "20px"}}>HINDUSTANI MUSIC</p></button>
        <button className="btn btn-danger mx-5" style={{height: "60px", paddingLeft: "20px", paddingRight: "20px", width: "280px"}}><p style={{marginTop: "10px", fontSize: "20px"}}>BHARATANATYAM</p></button>
      </div>
      </div>
    </>
  );
}
