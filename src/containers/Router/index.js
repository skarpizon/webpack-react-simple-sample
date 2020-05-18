import React from 'react';
// import { lazy } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withLastLocation } from 'react-router-last-location';
import Router from './Router';
// import {
//   SOME_PATH,
// } from '../../constants';

// const Component = lazy(() => import('../Component'));

export const defaultRouter = [
  {
    type: 'route',
    exact: true,
    path: '/',
    component: () => (<div>start</div>),
  },
];

const mapState = (state) => ({
  router: defaultRouter,
});

export default withLastLocation(withRouter(connect(mapState)(Router)));
