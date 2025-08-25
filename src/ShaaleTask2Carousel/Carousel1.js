import React from 'react';
import purandara from './Assets/purandara.png'
import maestraSpeakNirmala from './Assets/maestraSpeakNirmala.png';
import CRVyas from './Assets/CRVyas.png';
import maestroSpeakGhatam from './Assets/maestroSpeakGhatam.png'
import sitaKalyana from './Assets/sitaKalyana.png';
import kuntiKarna from './Assets/kuntiKarna.png';


export default function carousel1() {
  return (
    <>
    <div className='mainContainer' style={{ width:"100%",display: "flex",justifyContent: "center", alignItems: "center", }}>
    <div className='subContainer' style={{backgroundColor: "#0d0c0c",width:"1450px", paddingTop: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-touch="true" data-bs-ride="carousel" style={{height:"720px", width: "1450px"}}>
        <div className="carousel-indicators" style={{justifyContent: "flex-end", width: "1100px", marginLeft: "200px", marginRight: "0px"}}>
            <button style={{width: "10px", height: "10px", marginRight: "20px"}} className="rounded-circle active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
            <button style={{width: "10px", height: "10px", marginRight: "20px"}} className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button style={{width: "10px", height: "10px", marginRight: "20px"}} className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button style={{width: "10px", height: "10px", marginRight: "20px"}} className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 2"></button>
            <button style={{width: "10px", height: "10px", marginRight: "20px"}} className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
            <button style={{width: "10px", height: "10px"}} className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner py-5" style={{}}>
            <div className="carousel-item active" data-bs-interval="5000" style={{display: ""}}>
                <div className="c1" style={{display: "flex", justifyContent: "center", alignItems: ""}}>
                <div className='Theory1' style={{display: "flex", alignItems: "flex-end", paddingRight: "30px"}}>
                <div className='text1' style={{color: "grey"}}>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>Project Purandhara</h1>
                <p style={{margin: "0"}}>Meticulosly curated classroom sessions of select krithis of Purandhara</p>
                <p>Dasaru by Abilash Giriprasad</p>
                <div className="watchnow" style={{paddingTop: "50px", fontSize: "25px"}}>
                <a href="/" className='arrow' style={{color: "#c41d1d", fontWeight: "bold"}}>Watch Now <span style={{color: "#8f1f1f"}}>&gt;</span></a>
                </div>
                </div>
                </div>
                <div style={{paddingRight: "0px", paddingLeft: "190px"}}>
                <img src={purandara} className="d-block" style={{height: "620.5px", borderRadius: "30px"}} alt="purandara dasa"/>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="c5" style={{display: "flex", justifyContent: "center", alignItems: ""}}>
                <div className='Theory5' style={{display: "flex", alignItems: "flex-end", paddingRight: "180px"}}>
                <div className='text5' style={{color: "grey"}}>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>Maestro Speak</h1>
                <p>Nirmala Rajasekar</p>
                <div className="watchnow" style={{paddingTop: "50px", fontSize: "25px"}}>
                <a href="/" className='arrow' style={{color: "#c41d1d", fontWeight: "bold"}}>Watch Now <span style={{color: "#8f1f1f"}}>&gt;</span></a>
                </div>
                </div>
                </div>
                <div style={{paddingRight: "0px", paddingLeft: "190px"}}>
                <img src={maestraSpeakNirmala} className="d-block" style={{height: "620.5px", borderRadius: "30px"}} alt="purandara dasa"/>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="c5" style={{display: "flex", justifyContent: "center", alignItems: ""}}>
                <div className='Theory5' style={{display: "flex", alignItems: "flex-end", paddingRight: "140px"}}>
                <div className='text5' style={{color: "grey"}}>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>C.R. Vyas Centenary</h1>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>Celebration</h1>
                <p>Celebrating the Birth Centenary</p>
                <div className="watchnow" style={{paddingTop: "50px", fontSize: "25px"}}>
                <a href="/" className='arrow' style={{color: "#c41d1d", fontWeight: "bold"}}>Watch Now <span style={{color: "#8f1f1f"}}>&gt;</span></a>
                </div>
                </div>
                </div>
                <div style={{paddingRight: "0px", paddingLeft: "100px"}}>
                <img src={CRVyas} className="d-block" style={{height: "620.5px", borderRadius: "30px"}} alt="purandara dasa"/>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="c5" style={{display: "flex", justifyContent: "center", alignItems: ""}}>
                <div className='Theory5' style={{display: "flex", alignItems: "flex-end", paddingRight: "180px"}}>
                <div className='text5' style={{color: "grey"}}>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>Maestro Speak</h1>
                <p>Ghatam Suresh Vaidyanathan</p>
                <div className="watchnow" style={{paddingTop: "50px", fontSize: "25px"}}>
                <a href="/" className='arrow' style={{color: "#c41d1d", fontWeight: "bold"}}>Watch Now <span style={{color: "#8f1f1f"}}>&gt;</span></a>
                </div>
                </div>
                </div>
                <div style={{paddingRight: "0px", paddingLeft: "190px"}}>
                <img src={maestroSpeakGhatam} className="d-block" style={{height: "620.5px", borderRadius: "30px"}} alt="purandara dasa"/>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="c5" style={{display: "flex", justifyContent: "center", alignItems: ""}}>
                <div className='Theory5' style={{display: "flex", alignItems: "flex-end", paddingRight: "180px"}}>
                <div className='text5' style={{color: "grey"}}>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>Sita Kalyana</h1>
                <p>Experience the enchanting tale of Sita Kalyana</p>
                <div className="watchnow" style={{paddingTop: "50px", fontSize: "25px"}}>
                <a href="/" className='arrow' style={{color: "#c41d1d", fontWeight: "bold"}}>Watch Now <span style={{color: "#8f1f1f"}}>&gt;</span></a>
                </div>
                </div>
                </div>
                <div style={{paddingRight: "0px", paddingLeft: "190px"}}>
                <img src={sitaKalyana} className="d-block" style={{height: "620.5px", borderRadius: "30px"}} alt="purandara dasa"/>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="c6" style={{display: "flex", justifyContent: "center", alignItems: ""}}>
                <div className='Theory6' style={{display: "flex", alignItems: "flex-end", paddingRight: "0px"}}>
                <div className='text6' style={{color: "grey"}}>
                <h1 style={{fontSize: "50px", fontWeight: "bold"}}>Kunti karna</h1>
                <p>Cosmic Ties, Tragic Destinies: THe Story of Kunti & Karna - A Gamaka Geeta</p>
                <p>Roopaka</p>
                <div className="watchnow" style={{paddingTop: "50px", fontSize: "25px"}}>
                <a href="/" className='arrow' style={{color: "#c41d1d", fontWeight: "bold"}}>Watch Now <span style={{color: "#8f1f1f"}}>&gt;</span></a>
                </div>
                </div>
                </div>
                <div style={{paddingRight: "0px", paddingLeft: "190px"}}>
                <img src={kuntiKarna} className="d-block" style={{height: "620.5px", borderRadius: "30px"}} alt="purandara dasa"/>
                </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev p-0 m-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{width: "50px"}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{width: "50px"}}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

        
        </div>
    </div>
    <div>

    </div>
    </div>
    </>
  );
}


// data-bs-ride="carousel"