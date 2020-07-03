import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/update" />
    ) : (
      <li>
        <h2>{this.props.element.body}</h2>
        <button
          onClick={() => {
            this.props.updateItem({
              id: this.props.element.id,
              body: this.props.element.body,
              completed: this.props.element.completed,
            });
            this.setState({ redirect: true });
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            this.props.deleteItem(this.props.element.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  element: PropTypes.object,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoItem;
