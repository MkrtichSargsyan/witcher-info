import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';

export default function Slider({ slides, bg }) {
  const [title, setTitle] = useState('');
  let [choosedItem, setChoosedItem] = useState('');

  choosedItem = (el) => {
    setChoosedItem(el);
    console.log(choosedItem);
  };

  // get unique classes for the slider
  const classes = slides
    .map((el) => el.class)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );


  const slidesArr =
    slides.length &&
    slides.map((el) => {
      // console.log(el.name);
      return (
        <div
          className="card flex flex-col items-center relative"
          onClick={(el) => choosedItem(el)}
        >
          <h2 className="text-2xl text-white mt-3 font_courgette">
            {el.class}
          </h2>
          <img
            className="object-contain w-full h-full"
            src={el.image}
            alt={el.id}
          />
        </div>
      );
    });

  let sectionStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div
      style={sectionStyle}
      className="h-screen min-h-screen overflow-hidden relative"
    >
      <div className="w-max text-6xl ml-20 absolute bottom-1/3 text-white font_courgette">
        {/* {title} */}
        sdfsdfs
      </div>
      {slidesArr.length && (
        <div className="carousel_container">
          <Carousel slides={slidesArr} autoplay={false} />
        </div>
      )}
    </div>
  );
}
