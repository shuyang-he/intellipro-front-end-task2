import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
// import UpdatePage from "./components/UpdatePage";
import NotFound from "./components/NotFound";

const App = () => {
  // const location = useLocation();

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
        <Route path="/update/:id">
          <UpdateForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
