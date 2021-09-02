import creaturesReducer from '../store/reducers/creaturesReducer';
import * as types from '../store/types';

describe('creaturesReducer', () => {
  const initialState = {
    creatures: [],
    filtered: [],
  };

  it('should return the initial state', () => {
    const result = creaturesReducer(
      {
        creatures: [],
        filtered: [],
      },
      {},
    );
    expect(result).toEqual(initialState);
  });

  it('should fetch creatures', () => {
    expect(
      creaturesReducer(initialState, {
        type: types.FETCH_CREATURES,
        payload: ['a'],
      }),
    ).toEqual({ ...initialState, creatures: ['a'], filtered: ['a'] });
  });

  it('should filter the characters', () => {
    expect(
      creaturesReducer(initialState, {
        type: types.FILTER_CREATURES,
        payload: ['a'],
      }),
    ).toEqual({ ...initialState, filtered: ['a'] });
  });
});
