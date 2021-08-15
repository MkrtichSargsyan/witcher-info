import * as types from '../types';

const initialState = {
  options: [],
};

export const optionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW_OPTIONS:
      return { ...state, options: [...payload] };

    default:
      return state;
  }
};
