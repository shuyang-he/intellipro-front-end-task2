import React from "react";
import PropTypes from "prop-types";
import Whiteboard from "../containers/Whiteboard";
import TodoItem from "./TodoItem";

const todoList = ({ data, updateItem, deleteItem }) => {
  return (
    <Whiteboard>
      <ul>
        {data.map((element) => {
          return (
            <TodoItem
              key={element.id}
              element={element}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    </Whiteboard>
  );
};

todoList.propTypes = {
  data: PropTypes.array,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default todoList;
