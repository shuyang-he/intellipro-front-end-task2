import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <TodoList />
        </Route>
        <Route path="/create">
          <CreateForm />
        </Route>
        <Route path="/update/:id" component={UpdateForm} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
