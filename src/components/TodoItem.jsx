import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    return this.state.redirect ? (
      <Redirect to={"/update/" + this.props.element.id} />
    ) : (
      <li>
        <h2>{this.props.element.body}</h2>
        <Link to={"/update/" + this.props.element.id}>Update</Link>
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
  deleteItem: PropTypes.func,
};

export default TodoItem;
