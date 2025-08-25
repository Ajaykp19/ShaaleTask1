import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel2.css';
// import PropTypes from 'prop-types'; 





import Carousel2Product from './Carousel2Product';
// import Carousel2Product from './Carousel2Product';



  

export default function Carousel2({data, nItem, heading, width, borderRadius, height, autoPlay, speed,center, loop, border, borderColor}) {

    // const d = {data};

    // console.log(d);




    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: nItem
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


var count = data.length;

const product = data.map(
    (item) =>(
        <Carousel2Product key={item.id} img={item.img} url={item.url} width={width} borderRadius={borderRadius} height={height} border={border} borderColor={borderColor} />
    )

);

  return (
    <>
        <div className="mainContainer">
            <div className="subContainer">
                <div className="carouselContainer" style={{}}>
                    {heading !== "" ? 
                        <div className="heading">
                            <p className='paragraph'>{heading} ({count})</p>
                            <a href="/">View all</a> 
                        </div>
                    : null}
                    <Carousel className="carousel" centerMode={center} responsive={responsive} renderArrowsWhenDisabled={true} autoPlay={autoPlay} infinite={loop} autoPlaySpeed={speed}>
                        {product}
                    </Carousel>
                </div>
            </div>
        </div>
    </>
  );
}

// Carousel2.propTypes = {
//     data: PropTypes.object.isRequired,
//   };


