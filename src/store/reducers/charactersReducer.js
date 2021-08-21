import * as types from '../types';

const initialState = {
  characters: [],
  filtered: [],
};

export const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CHARACTERS:
      return { ...state, characters: [...payload], filtered: [...payload] };
    case types.FILTER_CHARACTERS:
      return { ...state, filtered: [...payload] };
    default:
      return state;
  }
};
