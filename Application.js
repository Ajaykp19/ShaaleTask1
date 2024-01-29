import React from 'react';
import DMobile from './DMobile.png';
import appStore from './appStore.png';
import playStore from './playStore.png';


export default function Application() {
    var style = {
        position: "absolute",
        top: "2420px",
        display: "inline-flex",
        marginLeft: "12%",
        marginTop: "2080px",
        marginBottom: "100px",
        alignItems: "center",
        textAlign: "center"
    }
  return (
    <>
      <div className="main-container" style={style}>
        <div className="3dImage" style={{marginRight: "80px", marginLeft: "80px"}}>
            <img src={DMobile} alt="3D-Mobile" height="500px"/>
        </div>
        <div className="download" style={{marginRight: "80px", marginLeft: "80px"}}>
            <div className="head">
                <p style={{fontSize: "35px", fontWeight: "bold", marginBottom: "20px"}}>Download the app</p>
            </div>
            <div className="app-icon" style={{display: "inline-flex", alignItems: "center"}}>
                <div className="apple" style={{marginLeft: "20px", marginRight: "20px"}}>
                    <a href=""><img src={appStore} alt="app-store-icon" height="100px"/></a>
                </div>
                <div className="bor-der" style={{marginLeft: "20px", marginRight: "20px", height: "130px", width: "3px", backgroundColor: "white"}}></div>
                <div className="playStore" style={{marginLeft: "20px", marginRight: "20px"}}>
                    <a href=""><img src={playStore} alt="play-store-icon" height="100px"/></a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
