import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/configureStore';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
