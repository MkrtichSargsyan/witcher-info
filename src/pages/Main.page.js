/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="main-slider-container">
      {window.innerWidth > 1400 ? (
        <div className="flex justify-between">
          <Link className="box sunset-n flex-1" to="/characters">
            <h1 className="characters_title opacity-0 absolute z-10 left-1/4 pr-4 bottom-4 text-white font-bold text-6xl font_courgette">
              Characters
            </h1>
          </Link>
          <Link className="box sunrise-n flex-1" to="/creatures">
            <h1 className="creatures_title opacity-0 absolute z-10 left-2/3 pr-4 bottom-4 text-white font-bold text-6xl font_courgette">
              Creatures
            </h1>
          </Link>
        </div>
      ) : (
        <>
          <Link className="box sunrise" to="/creatures">
            <h1 className="creatures_title opacity-0 absolute z-10 left-2/3 pr-4 bottom-4 text-white font-bold text-6xl font_courgette">
              Creatures
            </h1>
          </Link>
          <Link className="slider" to="/characters">
            <div className="box sunset">
              <h1 className="characters_title opacity-0 absolute z-10 left-1/4 pr-4 bottom-4 text-white font-bold text-6xl font_courgette">
                Characters
              </h1>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

export default MainPage;
