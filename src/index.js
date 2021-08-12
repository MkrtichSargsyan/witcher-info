import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.css';
import App from './App';

const Root = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <BrowserRouter>
    <App />
    //     </BrowserRouter>
    //   </PersistGate>
    // </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
