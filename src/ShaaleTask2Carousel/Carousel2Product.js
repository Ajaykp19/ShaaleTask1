import React from 'react';

export default function Carousel2Product(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <a href={props.url}>
        <img src={props.img} alt="" style={{height: `${props.height}px`, width: `${props.width}px`, borderRadius: `${props.borderRadius}%`, border: `${props.border}`, borderColor: `${props.borderColor}`}}/>
      </a>
    </div>
  );
}

// "280px"