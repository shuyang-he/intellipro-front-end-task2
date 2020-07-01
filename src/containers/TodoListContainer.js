import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { updateItem } from "../actions/updateItem";
import { deleteItem } from "../actions/deleteItem";

const mapStateToProps = (state) => {
  return {
    data: state.todoList.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (id) => {
      dispatch(updateItem(id));
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
