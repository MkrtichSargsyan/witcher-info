import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/Slider';
import my_dream_forest from '../images/my_dream_forest.jpg';
import { selectOption } from '../store/actions';

export default function CreaturesPage() {
  const dispatch = useDispatch();
  dispatch(selectOption('All'));

  const creatures = useSelector((state) => state.creaturesReducer.creatures);
  return <Slider slides={creatures} bg={my_dream_forest} />;
}
