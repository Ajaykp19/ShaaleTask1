import React,{useState} from 'react';

export default function ViewAll() {

    const [isHovered, setIsHovered] = useState(false);

    const enter = ()=>{
        setIsHovered(true);
    }

    const leave = ()=>{
        setIsHovered(false);
    }
  return (
    <>
      <div className="mainContainer">
            <div className="subContainer" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="button" >
                    <button className="btn" onMouseEnter={enter} onMouseLeave={leave} style={{border: "2px solid", color: isHovered?"black":"white", borderColor: "white", paddingLeft: "40px", paddingRight: "40px", paddingTop: "10px", paddingBottom: "10px", fontSize: "20px", fontWeight: "bold", borderRadius: "15px"}}>View all</button>
                </div>
            </div>
        </div>
    </>
  );
}
