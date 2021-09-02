import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/Slider';
import myDreamDorest from '../images/my_dream_forest.jpg';
import { selectOption } from '../store/actions';

export default function CreaturesPage() {
  const dispatch = useDispatch();
  dispatch(selectOption('All'));

  const creatures = useSelector((state) => state.creaturesReducer.creatures);
  return (
    <Slider
      itemsType="creatures"
      slides={creatures}
      bg={myDreamDorest}
      title={{
        quote:
          "Evil Is Evil. Lesser, Greater, Middling, Makes No Difference. If I'm To Choose Between One Evil And Another, I'd Rather Not Choose At All",
        author: 'Geralt of Rivia',
      }}
    />
  );
}
