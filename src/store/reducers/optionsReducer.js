import * as types from '../types';

const initialState = {
  options: [],
  selectedOption: 'All',
};

export const optionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW_OPTIONS:
      return { ...state, options: [...payload] };
    case types.SELECT_OPTION:
      return { ...state, selectedOption: payload };
    default:
      return state;
  }
};
