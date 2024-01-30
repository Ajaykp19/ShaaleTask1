import React from 'react';

export default function Accordion() {
    var a = "View All FAQ's >"
    var style = {
        position: "absolute",
        top: "1999px",
        marginLeft: "21%",
        marginTop: "4650px",
        textAlign: "center",
        // backgroundColor: "#1a1818",
        // borderRadius: "9px",
        // padding: "10px",
        // height: "410px",
        width: "950px",
        // display: "inline-flex"
    }
    var heading = {
        backgroundColor: "#070606",
        color: "white",
        fontSize: "30px"
    }
    var con = {
        color: "#b3a1a1",
        fontSize: "20px"
    }
  return (
    <>
    <div className="main-container" style={style}>
        <div className="heading" style={{fontSize: "70px", fontWeight: "bold"}}>
        <p>In case you </p>
        <p>have questions.</p>
        </div>
      <div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className="accordion-item my-5" style={heading} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed " style={heading} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        How do I subscribe?
      </button>
    </h2>
    <div id="flush-collapseOne"  className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={con}>Login or Create an account on Shaale. Head to shaale.com/subscribe or click 'Subscribe' in the footer to make a payment using your Credit card / Debit card / Netbanking / UPI and subscribe</div>
    </div>
  </div>
  <div className="accordion-item my-5" style={heading}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={heading} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        What are the modes of payment you accept?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={con}>We accept all major Credit Cards, Debit Cards, Netbanking, Digital Wallets & UPI</div>
    </div>
  </div>
  <div className="accordion-item my-5" style={heading}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={heading} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Does my subscribe auto-renew?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={con}>Yes. But you can choose to cancel your subscription anytime under shaale.com/myorders.</div>
    </div>
  </div>
</div>
<div className="que" style={{color: "#154fd6", fontSize: "20px", marginTop: "80px"}}>
    <a href="" style={{textDecoration: "none"}} >{a}</a>
</div>
</div>
    </>
  );
}
