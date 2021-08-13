import * as types from './types';
import axios from 'axios';
import { getRandomItems } from '../helpers';

const fetchCreaturesSuccess = (payload) => ({
  type: types.FETCH_CREATURES,
  payload,
});

export const fetchCreatures = (url) => async (dispatch) => {
  let creatures = [];

  try {
    creatures = await axios
      .get(url)
      .then((el) => el.data)
      .then((data) => getRandomItems(data, 7));
    console.log(creatures);
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(fetchCreaturesSuccess(creatures));
};
