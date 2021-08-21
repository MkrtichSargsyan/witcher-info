import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/Slider';
import characters_background from '../images/back_w.jpg';
import { selectOption } from '../store/actions';

export default function CharactersPage() {
  const dispatch = useDispatch();
  dispatch(selectOption('All'));

  const characters = useSelector((state) => state.charactersReducer.characters);

  return (
    <Slider
      itemsType='characters'
      slides={characters}
      bg={characters_background}
      title={{
        quote: `Evil Is Evil. Lesser, Greater, Middling, Makes No Difference. If I'm To Choose Between One Evil And Another, I'd Rather Not Choose At All`,
        author: 'Geralt of Rivia',
      }}
    />
  );
}
