import { connect } from 'react-redux';
import CreateForm from '../components/CreateForm';
import { createHandler, createSubmit } from '../actions/createItem';

const mapStateToProps = (state) => {
  return {
    item: state.todoList.createItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createHandler: (event) => {
      dispatch(createHandler(event));
    },
    createSubmit: () => {
      dispatch(createSubmit());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
