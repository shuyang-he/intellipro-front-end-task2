import React from "react";
import Navigation from "./Navigation";
import TodoList from "../containers/TodoListContainer";

const home = () => {
  return (
    <>
      <Navigation page="home" />
      <TodoList />
    </>
  );
};

export default home;
