import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './configureStore';
import App from './components/App';

const store = configureStore();
const { reduxHistory } = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={reduxHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
