import React, { Component } from "react";
import PropTypes from "prop-types";
import Whiteboard from "../containers/Whiteboard";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateHandler, updateSubmit } from "../actions/updateItem";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <Whiteboard>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.submit({
              id: this.props.item.id,
              body: this.props.item.body,
              completed: this.props.item.completed,
            });
            this.setState({ redirect: true });
          }}
        >
          <label>Update Item {this.props.item.id}</label>
          <input
            type="text"
            value={this.props.item.body}
            onChange={(event) => {
              this.props.handler(event);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </Whiteboard>
    );
  }
}

UpdateForm.propTypes = {
  item: PropTypes.object,
  handler: PropTypes.func,
  submit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    item: state.updateItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (event) => {
      dispatch(updateHandler(event));
    },
    submit: ({ id, body, completed }) => {
      dispatch(updateSubmit({ id, body, completed }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
