import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import configureStore from './configureStore';
import App from './components/App';

const store = configureStore();
const { reduxHistory } = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={reduxHistory}>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
