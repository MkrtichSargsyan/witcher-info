import React, { useState } from 'react';

export default function Slider(slides) {
  const [current, setCurrent] = React.useState(0);

  const slideWidth = 30;



  React.useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = current.id;
  }, [current]);

  return (
    <div className="containerSlider">
      {/* {slides.map((el) => {
        return el.name;
      })} */}
    </div>
  );
}
