import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import UpdatePage from "./components/UpdatePage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Navigation page="home" />
        <TodoList />
      </Route>
      <Route path="/create">
        <Navigation page="create" />
        <CreateForm />
      </Route>
      <Route path="/update/:id">
        <UpdatePage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
