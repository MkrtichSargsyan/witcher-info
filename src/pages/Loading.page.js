import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function LoadingPage({ completed }) {
  return (
    <div className="loadingPage flex justify-center items-center">
      <div className="w-2/6">
        <h2>Please wait ...</h2>
        <ProgressBar
          completed={completed}
          baseBgColor={'rgb(148 148 136)'}
          bgColor={'#020101'}
        />
      </div>
    </div>
  );
}
