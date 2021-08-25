import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '3d-react-carousal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showOptions } from '../store/actions';

export default function Slider({
  slides, bg, title, itemsType,
}) {
  const selectedOption = useSelector(
    (state) => state.optionsReducer.selectedOption,
  );
  const dispatch = useDispatch();
  const history = useHistory();
  // get unique classes for the slider
  const classes = slides
    .map((el) => (itemsType === 'characters' ? el.profession : el.class))
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      [],
    );

  // filter the slides

  let filteredSlides = [];

  switch (itemsType) {
    case 'characters':
      filteredSlides = selectedOption === 'All'
        ? slides
        : slides.filter((element) => element.profession === selectedOption);
      break;

    case 'creatures':
      filteredSlides = selectedOption === 'All'
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

  const slidesArr = filteredSlides.length > 0
    && filteredSlides.map((el) => (
      <div
        key={el.id}
        id={el.id}
        role="button"
        tabIndex={el.id}
        className="card flex flex-col items-center relative"
        onClick={() => showDetails(el)}
        onKeyDown={() => showDetails(el)}
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
    ));

  const sectionStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div
      style={sectionStyle}
      className="h-screen min-h-screen overflow-auto relative"
    >
      {window.innerWidth > 1100 ? (
        <>
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
          {slidesArr.length && (
            <div className="carousel_container">
              <Carousel slides={slidesArr} autoplay={false} />
            </div>
          )}
        </>
      ) : (
        <div
          className="w-screen p-10 mt-40
         flex flex-wrap justify-around
         gap-4 overflow-y-scroll transform scale-100"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              role="button"
              tabIndex={slide.id}
              className="p-6 bg-black bg-opacity-90 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500"
              onClick={() => showDetails(slide)}
              onKeyDown={() => showDetails(slide)}
            >
              <img
                claclassNamess="w-64 object-cover rounded-t-md"
                src={slide.image}
                alt=""
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-gray-700">
                  {slide.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.instanceOf(Array).isRequired,
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemsType: PropTypes.string.isRequired,
};
