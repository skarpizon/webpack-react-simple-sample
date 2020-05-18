import React, { Fragment, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Loader from '../../components/Loader';


export default function Router(props) {
  const {
    router,
    lastLocation,
    location: { pathname },
  } = props;

  // const NotFound = lazy(() => import('../../components/NotFound'));
  const enhanceRouter = [
    ...router,
    {
      type: 'route',
      path: '/404/',
      component: () => (<div>not found</div>),
    },
  ];

  // const currentRoute = enhanceRouter.find(({ path }) => (
  //   !!matchPath(pathname, {
  //     path,
  //     exact: true,
  //     strict: false,
  //   })
  // ));

  // const { clean } = currentRoute || {};

  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Switch>
          {enhanceRouter.map(item => {
            const { type, ...attrs } = item;
            const Component = type === 'redirect' ? Redirect : Route;
            return (
              <Component
                key={attrs.path}
                {...attrs}
              />
            );
          })}
          <Route
            render={({ history }) => {
              const { location } = history || {};
              return (
                <Redirect
                  to={{
                    state: { referrer: location },
                    pathname: lastLocation && lastLocation.pathname ? lastLocation.pathname : '/',
                    search: lastLocation && lastLocation.search ? lastLocation.search : '',
                  }}
                  push
                />
              );
            }}
          />
        </Switch>
      </Suspense>
    </Fragment>
  );
}
