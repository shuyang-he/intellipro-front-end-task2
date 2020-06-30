import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { deleteItem } from '../actions/deleteItem';

const mapStateToProps = (state) => {
  return {
    data: state.todoList.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
