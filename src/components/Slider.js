import React, { useState, useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import { useDispatch, useSelector } from 'react-redux';
import { showOptions } from '../store/actions';

export default function Slider({ slides, bg }) {
  const selectedOption = useSelector(
    (state) => state.optionsReducer.selectedOption
  );
  const dispatch = useDispatch();

  // let [choosedItem, setChoosedItem] = useState('');

  // get unique classes for the slider
  let classes = slides
    .map((el) => el.class)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );

  // filter the slides
  const filteredSlides =
    selectedOption === 'All'
      ? slides
      : slides.filter((element) => element.class === selectedOption);
  console.log(filteredSlides);

  useEffect(() => {
    dispatch(showOptions(classes));
  }, [classes, dispatch]);

  const slidesArr =
    filteredSlides.length &&
    filteredSlides.map((el) => {
      // console.log(el.name);
      return (
        <div
          className="card flex flex-col items-center relative"
          // onClick={(el) => choosedItem(el)}
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
      {window.innerWidth > 1100 ? (
        slidesArr.length && (
          <div className="carousel_container">
            <Carousel slides={slidesArr} autoplay={false} />
          </div>
        )
      ) : (
        <div className="bg-red-600 border h-7 w-screen"></div>
      )}
    </div>
  );
}

// export default React.memo(Slider, (props, nextProps) => {
//   console.log(props);
//   console.log(nextProps);
//   // if (props.prop1 === nextProps.prop1) {
//   //   // return true if you don't need re-render
//   // }
// });
