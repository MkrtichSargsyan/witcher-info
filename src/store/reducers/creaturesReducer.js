import * as types from '../types';

const initialState = {
  creatures: [],
};

export const creaturesReducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case types.FETCH_CREATURES:
      return { ...state, creatures: [...payload] };

    default:
      return state;
  }
};
