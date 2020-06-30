import { connect } from 'react-redux';
import CreateForm from '../components/CreateForm';
import { createItem, createHandler, createSubmit } from '../actions/createItem';

const mapStateToProps = (state) => {
  return {
    item: state.todoList.createItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: () => {
      dispatch(createItem());
    },
    handler: (event) => {
      dispatch(createHandler(event));
    },
    submit: () => {
      dispatch(createSubmit());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
