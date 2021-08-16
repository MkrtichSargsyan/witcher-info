import React, { useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showOptions } from '../store/actions';

export default function Slider({ slides, bg }) {
  const selectedOption = useSelector(
    (state) => state.optionsReducer.selectedOption
  );
  const dispatch = useDispatch();
  let history = useHistory();

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

  useEffect(() => {
    dispatch(showOptions(classes));

    // console.log(document.getElementsByClassName('active')[0]);
  }, [classes, dispatch]);

  const showDetails = (el) => {
    const path = `${history.location.pathname}/${el.id}`;
    history.push(path);
  };

  const slidesArr =
    filteredSlides.length > 0 &&
    filteredSlides.map((el) => {
      return (
        <div
          id={el.id}
          className="card flex flex-col items-center relative"
          onClick={() => showDetails(el)}
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
