import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/create" exact>
        <Create />
      </Route>
      <Route path="/update" exact>
        <Update />
      </Route>
    </Switch>
  );
};

export default App;
