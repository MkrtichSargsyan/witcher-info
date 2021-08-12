import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <div className="slider-container">
        <Link className="box sunrise" to="/creatures"></Link>
        <Link className="slider" to="/characters">
          <div className="box sunset"></div>
        </Link>
      </div>
    </>
  );
}

export default MainPage;
