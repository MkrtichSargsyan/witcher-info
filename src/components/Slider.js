// import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';

export default function Slider({ slides }) {
  let slidess = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  console.log(slidess);
  const slidesArr =
    slides.length && slides.map((el) => <img src={el.image} alt={el.id} />);
  // console.log(slidesArr);

  return (
    <div className="bg-gray-800 h-screen relative">
      {/* <div className="carousel_container border w-2/5 absolute right-0 bottom-64 h-36 flex">
      {slides.length &&
        slidesArr.map((el) => (
          
          ))}
      </div> */}

      <Carousel slides={slidesArr} autoplay={false} interval={1000} />
    </div>
  );
}
