import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterView from './RouterView';
import Navbar from './components/NavBar'

function App() {
  return (
    <Router>
      <Navbar />
      <RouterView />
    </Router>
  );
}

export default App;
