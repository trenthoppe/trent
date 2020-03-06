import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

// Landing
import RunawayResume from './landing/runawayResume/pages/RunawayResume';
import InfiniteHexGrid from './landing/infiniteHex/pages/InfiniteHexGrid';

// Learn React
import NewPlace from './learnReact/places/pages/NewPlace';
import MainNavigation from './learnReact/shared/components/Navigation/MainNavigation'
import UserPlaces from './learnReact/places/pages/UserPlaces';
import Users from './learnReact/user/pages/Users';

function App() {

  const LandingContainer = () => (
    <React.Fragment>
        <Route path="/" render={() => <Redirect to="/hex" />}/>
        <Route path="/resume" component={RunawayResume} />
        <Route path="/hex" component={InfiniteHexGrid} />
    </React.Fragment>
  );

  const TestAppContainer = () => (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/test" exact>
            <Users />
          </Route>
          <Route path="/test/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/test/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/test" />
        </Switch>
      </main>
    </React.Fragment>
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/test" component={TestAppContainer} />
        <Route component={LandingContainer} />
      </Switch>
    </Router>
  );
}

export default App;
