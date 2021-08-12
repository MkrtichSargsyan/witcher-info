import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <div class="slider-container">
        <div class="box sunrise">
          <a href="#box2"></a>
        </div>
        <div class="slider">
          <div class="box sunset">
            <a href="#box1"></a>
          </div>
        </div>
      </div>
    </>
    // <div className="flex w-full">
    //   <Link to="/creatures" className="flex-1">
    //     <div className="creatures_cover bg-red-700 h-screen">creatures</div>
    //   </Link>
    //   <Link to="/characters" className="flex-1">
    //     <div className="characters_cover bg-blue-700 h-screen">characters</div>
    //   </Link>
    // </div>
  );
}

export default MainPage;
