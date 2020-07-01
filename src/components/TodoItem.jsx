import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class todoItem extends Component {
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
            this.props.updateItem(this.props.element.id);
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

todoItem.propTypes = {
  element: PropTypes.object,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default todoItem;
