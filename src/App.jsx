import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList/TodoList";
import CreateForm from "./components/CreateForm/CreateForm";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import NotFound from "./components/NotFound/NotFound";

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
