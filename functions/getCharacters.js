/* eslint-disable no-unused-vars */

const axios = require('axios');

const API_ENDPOINT = 'http://witcher3api.com/api/characters';

exports.handler = async () => {
  let characters = [];

  try {
    characters = await axios
      .get(API_ENDPOINT)
      .then((el) => el.data)
      .then((data) => data);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(characters),
  };
};
