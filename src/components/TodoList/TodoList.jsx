import React from "react";
import PropTypes from "prop-types";
import Whiteboard from "../../containers/Whiteboard";
import TodoItem from "../TodoItem/TodoItem";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/deleteItem";
import style from "./TodoList.css";

const TodoList = ({ data, updateItem, deleteItem }) => {
  return (
    <Whiteboard>
      <ul className={style.ul}>
        {data.map((element) => {
          return (
            <TodoItem
              key={element.id}
              element={element}
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
  deleteItem: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    data: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
