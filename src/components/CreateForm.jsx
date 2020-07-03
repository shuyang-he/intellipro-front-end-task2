import React, { Component } from "react";
import PropTypes from "prop-types";
import Whiteboard from "../containers/Whiteboard";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createSubmit } from "../actions/createItem";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      body: "",
    };
    this.handler = this.handler.bind(this);
  }

  handler(name, event) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <Whiteboard>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.submit(this.state.body);
            this.setState({ redirect: true });
          }}
        >
          <label>New Item</label>
          <input
            type="text"
            onChange={(event) => {
              this.handler("body", event);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </Whiteboard>
    );
  }
}

CreateForm.propTypes = {
  handler: PropTypes.func,
  createItem: PropTypes.func,
  submit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    item: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (body) => {
      dispatch(createSubmit(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
