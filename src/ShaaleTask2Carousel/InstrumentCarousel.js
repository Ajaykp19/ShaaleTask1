import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel2.css';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function InstrumentCarousel({data, heading}) {

    let count = data.length;

  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
            <div className="carouselContainer">
                <div className="heading">
                    <p className='paragraph'>{heading} ({count})</p>
                    <a href="/">View all</a>
                </div>
                <Carousel className="InstrumentCarousel" centerMode={true} responsive={responsive} renderArrowsWhenDisabled={true}>
                    {
                        data.map((item)=>(
                            <div className="gradient-background1" style={{height: "184px", width: "280px", borderRadius: "20px",display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p className="paragraph" style={{textAlign: "center", padding: "0px"}}>{item}</p>
                            </div>
                        ))
                    }
                    
                </Carousel>
            </div>
        </div>
      </div>
    </>
  );
}
