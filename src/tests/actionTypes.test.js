import * as types from '../store/types';

describe('action types', () => {
  it('should have a type of FETCH_CREATURES', () => {
    expect(types.FETCH_CREATURES).toEqual('FETCH_CREATURES');
  });

  it('should have a type of FILTER_CREATURES', () => {
    expect(types.FILTER_CREATURES).toEqual('FILTER_CREATURES');
  });

  it('should have a type of FILTER_CHARACTERS', () => {
    expect(types.FILTER_CHARACTERS).toEqual('FILTER_CHARACTERS');
  });

  it('should have a type of FILTER_CHARACTERS', () => {
    expect(types.FILTER_CHARACTERS).toEqual('FILTER_CHARACTERS');
  });

  it('should have a type of SHOW_OPTIONS', () => {
    expect(types.SHOW_OPTIONS).toEqual('SHOW_OPTIONS');
  });

  it('should have a type of SELECT_OPTION', () => {
    expect(types.SELECT_OPTION).toEqual('SELECT_OPTION');
  });

  it('should have a type of FETCH_CREATURE_BY_ID', () => {
    expect(types.FETCH_CREATURE_BY_ID).toEqual('FETCH_CREATURE_BY_ID');
  });
});
