import React, { useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showOptions } from '../store/actions';

export default function Slider({ slides, bg, title, itemsType }) {
  const selectedOption = useSelector(
    (state) => state.optionsReducer.selectedOption
  );
  const dispatch = useDispatch();
  let history = useHistory();

  // get unique classes for the slider
  let classes = slides
    .map((el) => (itemsType === 'characters' ? el.profession : el.class))
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );

  // filter the slides

  let filteredSlides = [];

  switch (itemsType) {
    case 'characters':
      filteredSlides =
        selectedOption === 'All'
          ? slides
          : slides.filter((element) => element.profession === selectedOption);
      break;

    case 'creatures':
      filteredSlides =
        selectedOption === 'All'
          ? slides
          : slides.filter((element) => element.class === selectedOption);
      break;

    default:
      break;
  }

  useEffect(() => {
    dispatch(showOptions(classes));
  }, [classes, dispatch]);

  const showDetails = (el) => {
    const path = `${history.location.pathname}/${el.id}`;
    history.push(path, { itemsType });
  };

  const slidesArr =
    filteredSlides.length > 0 &&
    filteredSlides.map((el) => {
      return (
        <div
          key={el.id}
          id={el.id}
          className="card flex flex-col items-center relative"
          onClick={() => showDetails(el)}
        >
          <h2 className="text-2xl text-white mt-3 font_courgette">
            {itemsType === 'characters' ? el.profession : el.class}
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
      <div className="quote bg-gray-500 ml-16 absolute bottom-36 text-white font_courgette">
        <div className="w-full mb-5">
          <div className="text-3xl p-4 text-white text-left leading-tight h-3">
            “
          </div>
          <p className="text-1xl text-gray-600 text-center px-5">
            {title.quote}
          </p>
          <div className="text-3xl text-white text-right leading-tight h-3 -mt-3 p-4">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="author text-md text-white font-bold text-center">
            {title.author}
          </p>
        </div>
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
