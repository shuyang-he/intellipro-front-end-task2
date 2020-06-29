import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/HomeContainer';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
    </Switch>
  );
};

export default App;
