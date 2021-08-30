import axios from 'axios';
import * as types from './types';
import getRandomItems from '../helpers';

const fetchCreaturesSuccess = (payload) => ({
  type: types.FETCH_CREATURES,
  payload,
});

const fetchCharactersSuccess = (payload) => ({
  type: types.FETCH_CHARACTERS,
  payload,
});

export const fetchCreatures = (url) => async (dispatch) => {
  let creatures = [];

  try {
    creatures = await axios
      .get(url, {
        mode: 'no-cors',
      })
      .then((el) => el.data)
      .then((data) => getRandomItems(data, 20));
  } catch (error) {
    throw new Error(error);
  }
  return dispatch(fetchCreaturesSuccess(creatures));
};

// fetchCharacters

export const fetchCharacters = (url) => async (dispatch) => {
  let characters = [];

  try {
    characters = await axios
      .get(url, {
        mode: 'no-cors',
      })
      .then((el) => el.data)
      .then((data) => getRandomItems(data, 12));
  } catch (error) {
    throw new Error(error);
  }
  return dispatch(fetchCharactersSuccess(characters));
};

export const showOptions = (payload) => ({
  type: types.SHOW_OPTIONS,
  payload,
});

export const selectOption = (payload) => ({
  type: types.SELECT_OPTION,
  payload,
});
