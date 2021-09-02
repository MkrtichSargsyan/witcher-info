import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';

export default function LoadingPage({ completed }) {
  return (
    <div className="loadingPage flex justify-center items-center">
      <div className="w-2/6">
        <h2 className="mb-2 text-white text-xl">Please wait ...</h2>
        <ProgressBar
          completed={completed}
          baseBgColor="rgb(62 69 84)"
          bgColor="#020101"
          height="35px"
        />
      </div>
    </div>
  );
}

LoadingPage.propTypes = {
  completed: PropTypes.number.isRequired,
};
