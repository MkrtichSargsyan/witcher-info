// import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';

export default function Slider({ slides }) {
  console.log(slides);

  const slidesArr =
    slides.length &&
    slides.map((el) => (
      <div className="card bg-gray-900 flex flex-col items-center">
        <h2 className="text-2xl font_courgette">{el.name}</h2>
        <img
          className="object-contain w-full h-full"
          src={el.image}
          alt={el.id}
        />
      </div>
    ));

  return (
    <div className="loadingPage h-screen relative">
      <div className="carousel_container">
        <Carousel slides={slidesArr} autoplay={false} interval={1000} />
      </div>
    </div>
  );
}
