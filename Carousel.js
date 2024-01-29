import React from 'react';

export default function Carousel() {
    var style = {
        position: "absolute",
        top: "1999px",
        marginLeft: "21%",
        marginTop: "3200px",
        // textAlign: "center",
        // backgroundColor: "#1a1818",
        // borderRadius: "9px",
        padding: "10px",
        height: "450px",
        width: "1000px",
        fontSize: "28px"
    }
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={style}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{backgroundColor: "#1a1818", borderRadius: "10px", padding: "30px",fontFamily: "Comic Sans MS, Comic Sans, cursive"}}>
    <div className="carousel-item active">
      <p>Thank you for coming up with this brilliant idea, which hopefully</p>
      <p>will fill a huge gap in the world of arts, the gap between </p>
      <p>observing and truely appreciating, one that can</p>
      <p>be bridged if one is taught to understand the performing arts better.</p>
      <p style={{color: "#831a1a", fontFamily: "cursive", fontSize: "23px", marginTop: "40px"}}>Shakala Bhagwat</p>
    </div>
    <div className="carousel-item">
      <p>Thanks for putting together a very useful and enchanting</p>
      <p>ensemble of digital content.</p>
      <p style={{color: "#831a1a", fontFamily: "cursive", fontSize: "23px", marginTop: "40px"}}>Vani Hebbani</p>
    </div>
    <div className="carousel-item">
      <p>Thanks to Shaale that I am able to connect back to my</p>
      <p>roots being so far away.</p>
      <p style={{color: "#831a1a", fontFamily: "cursive", fontSize: "23px", marginTop: "40px"}}>Jayashri Sheshadri</p>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>






















      {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={style}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <p>Thank you for coming up with this brilliant idea, which hopefully</p>
      <p>will fill a huge gap in the world of arts, the gap between </p>
      <p>observing and truely appreciating, one that can</p>
      <p>be bridged if one is taught to understand the performing arts better.</p>
      <p>Shakala Bhagwat</p>
    </div>
    <div className="carousel-item">
      <p>Thanks for putting together a very useful and enchanting</p>
      <p>ensemble of digital content.</p>
      <p>Vani Hebbani</p>
    </div>
    <div className="carousel-item">
      <p>Thanks to Shaale that I am able to connect back to my</p>
      <p>roots being so far away.</p>
      <p>Jayashri Sheshadri</p>
    </div>
  </div>
</div> */}
    </>
  );
}
