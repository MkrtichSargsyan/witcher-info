import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import my_dream_forest from '../images/my_dream_forest.jpg';

export default function CreaturesPage() {
  const creatures = useSelector((state) => state.creaturesReducer.creatures);

  return <Slider slides={creatures} bg={my_dream_forest} />;
}
