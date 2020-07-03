import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Navigation page="home" />
        <TodoList />
      </Route>
      <Route path="/create" exact>
        <Navigation page="create" />
        <CreateForm />
      </Route>
      <Route path="/update" exact>
        <Navigation page="update" />
        <UpdateForm />
      </Route>
    </Switch>
  );
};

export default App;
