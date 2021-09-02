import { combineReducers } from 'redux';
import creaturesReducer from './creaturesReducer';
import charactersReducer from './charactersReducer';
import optionsReducer from './optionsReducer';

export default combineReducers({
  creaturesReducer,
  charactersReducer,
  optionsReducer,
});
