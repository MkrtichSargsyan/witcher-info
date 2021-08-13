import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';

export default function CreaturesPage() {
  const creatures = useSelector((state) => state.creaturesReducer.creatures);

  return <Slider slides={creatures} />;
}
