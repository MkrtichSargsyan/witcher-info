import * as types from '../types';

const initialState = {
  creatures: [],
  filtered: [],
};

export const creaturesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CREATURES:
      return { ...state, creatures: [...payload], filtered: [...payload] };
    case types.FILTER_CREATURES:
      return { ...state, filtered: [...payload] };
    default:
      return state;
  }
};
