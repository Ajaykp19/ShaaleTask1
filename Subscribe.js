import React from 'react';
import mobile from './mobile.png'
import tab from './tab.png'
import lapTop from './lapTop.png'
import deskTop from './deskTop.png'

export default function Subscribe() {
    var style = {
        position: "absolute",
        top: "1800px",
        // display: "inline-flex",
        marginLeft: "11%",
        marginTop: "2080px",
        marginBottom: "100px",
        alignItems: "center",
        textAlign: "center"
    }
  return (
    <>
      <div className="main-container" style={style}>
        <div className="heading">
            <p style={{fontSize: "75px", color: "#831a1a", fontFamily: "cursive"}}>Subscribe once, Access anywhere</p>
        </div>
        <div className="text">
            <p style={{fontSize: "25px", fontWeight: "bold", fontFamily: "Comic Sans MS, Comic Sans, cursive", marginBottom: "100px"}}>Login with your account to enjoy your subscriptions across devices</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-3" style={{marginTop: "50px"}}>
                    <img src={mobile} alt="mobile" />
                    <p style={{marginTop: "20px"}}>Mobile</p>
                </div>
                <div className="col-3" style={{marginTop: "30px"}}>
                    <img src={tab} alt="tab" />
                    <p style={{marginTop: "20px"}}>Tablet</p>
                </div>
                <div className="col-3" style={{marginTop: "30px"}}>
                    <img src={lapTop} alt="laptop" />
                    <p style={{marginTop: "20px"}}>Laptop</p>
                </div>
                <div className="col-3" style={{marginTop: "0"}}>
                    <img src={deskTop} alt="desktop" />
                    <p style={{marginTop: "10px"}}>Desktop</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
