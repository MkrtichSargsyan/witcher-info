// import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';
import my_dream_forest from '../images/my_dream_forest.jpg';

export default function Slider({ slides }) {
  console.log(slides);

  const slidesArr =
    slides.length &&
    slides.map((el) => (
      <div className="card bg-gray-900 flex flex-col items-center relative">
        <h2 className="text-2xl font_courgette">{el.class}</h2>
        <img
          className="object-contain w-full h-full"
          src={el.image}
          alt={el.id}
        />
      </div>
    ));

  let sectionStyle = {
    backgroundImage: `url(${my_dream_forest})`,
  };

  return (
    <div style={sectionStyle} className="h-screen overflow-hidden">
      {slidesArr.length && (
        <div className="carousel_container">
          <Carousel slides={slidesArr} autoplay={false} interval={1000} />
        </div>
      )}
    </div>
  );
}
