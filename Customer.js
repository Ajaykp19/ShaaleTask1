import React from 'react';

export default function Customer() {
  var a = "Explaore benifits >"
  var style = {
    position: "absolute",
    top: "1999px",
    marginLeft: "1%",
    marginTop: "3800px",
    textAlign: "center",
    // backgroundColor: "#1a1818",
    // borderRadius: "9px",
    padding: "10px",
    height: "410px",
    width: "1500px",
    display: "inline-flex"
}
  return (
    <>
      <div className="main-container " style={style}>
      <div className="cust-1 gradient-background1" style={{fontSize: "70px", fontStyle: "none", height: "650px", width: "1900px",}}>
        <a href=" "  style={{textDecoration: "none", color: "white", fontWeight: "bold"}}>
          
            <div className="text" style={{marginTop: "80px"}}>
             <p style={{}}>ARTISTS</p>
             <p>CREATORS</p>
             <p>TEACHERS</p>
             <p>INSTITUTIONS</p>
             <p style={{fontSize: "20px"}}>{a}</p>
             </div>
        </a>
      </div>
      <div className="cust-1 gradient-background2" style={{fontSize: "70px", fontStyle: "none", height: "650px", width: "1900px",}}>
        <a href=" " style={{textDecoration: "none", color: "white", fontWeight: "bold"}}>
          <div className="text" style={{marginTop: "250px"}}>
             {/* <p>ARTISTS</p>
             <p>CREATORS</p>
             <p>TEACHERS</p> */}
             <p>STUDENTS</p>
             <p style={{fontSize: "20px"}}>{a}</p>
             </div>
        </a>
      </div>
      </div>
    </>
  );
}
