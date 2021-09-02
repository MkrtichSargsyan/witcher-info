import charactersReducer from '../store/reducers/charactersReducer';
import * as types from '../store/types';

describe('charactersReducer', () => {
  const initialState = {
    characters: [],
    filtered: [],
  };

  it('should return the initial state', () => {
    const result = charactersReducer(
      {
        characters: [],
        filtered: [],
      },
      {},
    );
    expect(result).toEqual(initialState);
  });

  it('should fetch characters', () => {
    expect(
      charactersReducer(initialState, {
        type: types.FETCH_CHARACTERS,
        payload: ['a'],
      }),
    ).toEqual({ ...initialState, characters: ['a'], filtered: ['a'] });
  });

  it('should filter the characters', () => {
    expect(
      charactersReducer(initialState, {
        type: types.FILTER_CHARACTERS,
        payload: ['a'],
      }),
    ).toEqual({ ...initialState, filtered: ['a'] });
  });
});
