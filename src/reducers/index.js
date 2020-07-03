import { combineReducers } from "redux";
import todoList from "./todoList";
import updateItem from "./updateItem";

export default combineReducers({
  todoList,
  updateItem,
});
