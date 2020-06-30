import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/create' exact>
        <Create />
      </Route>
    </Switch>
  );
};

export default App;
