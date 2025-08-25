import React from 'react';
import filter from './filter.png';

export default function Access() {
    var a = "Browse >";
    var style = {
        position: "absolute",
        top: "1000px",
        display: "inline-flex",
        marginLeft: "18%",
        marginTop: "280px",
        marginBottom: "100px"
    }
  return (
    <>
      <div className="main-container" style={style}>
        <div className="imag" style={{marginLeft: "100px", marginRight: "100px"}}>
            <img src={filter} alt="filter-paper" height="200px" />
        </div>
        <div className="text-container" style={{marginLeft: "100px", marginRight: "100px"}}>
            <div className="text">
            <p className="head" style={{fontSize: "38px", color: "#831a1a", fontFamily: "cursive"}}>Access Curated Content</p>
            <p style={{fontSize: "25px"}}>Performances, Workshops, Lessons,</p>
            <p style={{fontSize: "25px"}}>Albums, Archives, Podcasts, Lec-dems,</p>
            <p style={{fontSize: "25px"}}>Short Videos & more</p>
            </div>
            <div className="browse">
                <a className="nav-link " href="" style={{color: "#154fd6", fontSize: "20px"}}>{a}</a>
            </div>
        </div>
      </div>
    </>
  );
}
