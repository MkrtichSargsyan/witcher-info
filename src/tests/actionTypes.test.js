import * as types from '../store/types';

describe('action types', () => {
  it('should have a type of FETCH_CREATURES', () => {
    expect(types.FETCH_CREATURES).toEqual('FETCH_CREATURES');
  });

  it('should not have a type of FETCH_CREATURESs', () => {
    expect(types.FETCH_CREATURES).not.toEqual('FETCH_CREATURESs');
  });

  it('should have a type of FILTER_CREATURES', () => {
    expect(types.FILTER_CREATURES).toEqual('FILTER_CREATURES');
  });

  it('should not have a type of FILTER_CREATURESs', () => {
    expect(types.FILTER_CREATURES).not.toEqual('FILTER_CREATURESs');
  });

  it('should have a type of FILTER_CHARACTERS', () => {
    expect(types.FILTER_CHARACTERS).toEqual('FILTER_CHARACTERS');
  });

  it('should not have a type of FILTER_CHARACTERSs', () => {
    expect(types.FILTER_CHARACTERS).not.toEqual('FILTER_CHARACTERSs');
  });


  it('should have a type of SHOW_OPTIONS', () => {
    expect(types.SHOW_OPTIONS).toEqual('SHOW_OPTIONS');
  });

  it('should not have a type of SHOW_OPTIONSs', () => {
    expect(types.SHOW_OPTIONS).not.toEqual('SHOW_OPTIONSs');
  });

  it('should have a type of SELECT_OPTION', () => {
    expect(types.SELECT_OPTION).toEqual('SELECT_OPTION');
  });

  it('should not have a type of SELECT_OPTIONs', () => {
    expect(types.SELECT_OPTION).not.toEqual('SELECT_OPTIONs');
  });

  it('should have a type of FETCH_CREATURE_BY_ID', () => {
    expect(types.FETCH_CREATURE_BY_ID).toEqual('FETCH_CREATURE_BY_ID');
  });

  it('should not have a type of FETCH_CREATURE_BY_IDd', () => {
    expect(types.FETCH_CREATURE_BY_ID).not.toEqual('FETCH_CREATURE_BY_IDd');
  });
});
