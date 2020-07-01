import { connect } from "react-redux";
import UpdateForm from "../components/UpdateForm";
import { updateHandler, updateSubmit } from "../actions/updateItem";

const mapStateToProps = (state) => {
  return {
    item: state.todoList.updateItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (event) => {
      dispatch(updateHandler(event));
    },
    submit: () => {
      dispatch(updateSubmit());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
