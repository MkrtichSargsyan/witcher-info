/* eslint-disable import/prefer-default-export */
import * as types from '../types';

const initialState = {
  characters: [],
  filtered: [],
};

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CHARACTERS:
      return { ...state, characters: [...payload], filtered: [...payload] };
    case types.FILTER_CHARACTERS:
      return { ...state, filtered: [...payload] };
    default:
      return state;
  }
};

export default charactersReducer;
