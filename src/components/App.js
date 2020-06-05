import React, { Suspense } from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { connect } from 'react-redux';
import DefaultRouter from '../containers/Router';
import Loader from './Loader';

const App = () => {

  return (
    <LastLocationProvider>
      <Suspense fallback={<Loader />}>
        <DefaultRouter />
      </Suspense>
    </LastLocationProvider>
  );
}

export default connect(state => ({
}))(App);
