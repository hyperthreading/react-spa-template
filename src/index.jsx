import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import configureStore from './configureStore';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const ReduxApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ReduxApp, document.getElementById('root'));
registerServiceWorker();
