import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/Home'));
const Section = React.lazy(() => import('./containers/Section'));
const Detail = React.lazy(() => import('./containers/Detail'));

export default function RouterView() {
  return (
    <React.Suspense fallback={<h1 className='text-center'>Loading..</h1>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/company' component={Section} />
        <Route exact path='/community' component={Section} />
        <Route exact path='/educational' component={Section} />
        <Route exact path='/company/:id' component={Detail} />
        <Route exact path='/community/:id' component={Detail} />
        <Route exact path='/educational/:id' component={Detail} />
      </Switch>
    </React.Suspense>
  );
}
