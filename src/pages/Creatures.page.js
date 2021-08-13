import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';

export default function CreaturesPage() {
  const creatures = useSelector((state) => state.creaturesReducer.creatures);
  console.log(creatures);

  return (
    <div>
      <Slider />
    </div>
  );
}
