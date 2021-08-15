import { combineReducers } from 'redux';
import { creaturesReducer } from './creaturesReducer';
import { optionsReducer } from './optionsReducer';

export default combineReducers({
  creaturesReducer,
  optionsReducer
});
