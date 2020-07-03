import React from "react";
import PropTypes from "prop-types";
import Whiteboard from "../containers/Whiteboard";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { updateItem } from "../actions/updateItem";
import { deleteItem } from "../actions/deleteItem";

const TodoList = ({ data, updateItem, deleteItem }) => {
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

TodoList.propTypes = {
  data: PropTypes.array,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    data: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: ({ id, body, completed }) => {
      dispatch(updateItem({ id, body, completed }));
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
