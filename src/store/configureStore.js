import { createStore } from 'redux';
import reducers from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

export default store;
