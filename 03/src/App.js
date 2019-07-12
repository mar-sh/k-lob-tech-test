import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar'

const Home = lazy(() => import('./containers/Home'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={() => <h1>Loading</h1>}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
