import React,{useState} from 'react';
import bgIma from './bgIma.jpg'
import india from './india.png'

export default function Login() {
    var style={
        backgroundImage: `url(${bgIma})`,
        position: "absolute",
        height: "700px",
        width: "1400px",
        backgroundRepeat: "no-repeat",
        marginTop: "35px",
        marginLeft: "1px",
        textAlign: "center",
        justifyContent: "center"
    }
    var list = {
        listStyle: "none"
    }
    const [mobileNumber, setMobileNumber] = useState('');
    const handleMobileNumberChange = (event) => {
        const inputValue = event.target.value;
    
        // Check if the input value contains only numeric characters and is limited to 10 digits
        if (/^\d{0,10}$/.test(inputValue)) {
          setMobileNumber(inputValue);
        }
      };
    var texts = {
        justifyContent: "center",
        marginTop: "200px"
    }
  return (
    <>
    <div className="container my-5 mx-5">
        <div className="logIn" style={style}>
            <div className="text" style={texts}>
       <div className="heading">
        <h1 style={{fontSize: "100px",fontFamily: "serif"}}>Learn & Grow with <span style={{fontSize: "80px",color: "red"}}>Artists</span></h1>
        <h4 style={{fontFamily: "Courier New, monospace", marginBottom: "50px"}}>Join the Community</h4>
        <div className="mobileno my-5" style={{display: "inline"}}>
            <img src={india} style={list} height="20px" className='mx-1' alt="India-flag"></img>
            <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} style={{width: "350px", height: "50px",paddingLeft: "30px"}}/>
        </div>
        
       </div>
       <button className="btn btn-danger" style={{marginTop: "5px",width: "350px", height: "55px", marginLeft: "35px"}}>Login with OTP</button>
       </div>
       </div>
    </div>
    </>
  );
}
