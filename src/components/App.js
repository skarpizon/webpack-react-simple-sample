import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { connect } from 'react-redux';
import DefaultRouter from '../containers/Router';
import Loader from './Loader';

const App = ({ history }) => {

  return (
    <Router history={history}>
      <LastLocationProvider>
        <Suspense fallback={<Loader />}>
          <DefaultRouter />
        </Suspense>
      </LastLocationProvider>
    </Router>
  );
}

export default connect(state => ({
  history: state.reduxHistory,
}))(App);
