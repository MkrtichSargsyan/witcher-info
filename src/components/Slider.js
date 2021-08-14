// import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';

export default function Slider({ slides, bg }) {
  console.log(slides);

  const slidesArr =
    slides.length &&
    slides.map((el) => (
      <div className="card flex flex-col items-center relative">
        <h2 className="text-2xl text-white mt-3 font_courgette">{el.class}</h2>
        <img
          className="object-contain w-full h-full"
          src={el.image}
          alt={el.id}
        />
      </div>
    ));

  let sectionStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div style={sectionStyle} className="h-screen overflow-hidden">
      {slidesArr.length && (
        <div className="carousel_container">
          <Carousel slides={slidesArr} autoplay={false} />
        </div>
      )}
    </div>
  );
}
