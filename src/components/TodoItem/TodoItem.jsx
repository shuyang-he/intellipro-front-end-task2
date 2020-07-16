import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import style from "./TodoItem.css";

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
      <li className={style.li}>
        <div className={style.item}>
          <h2>{this.props.element.body}</h2>
        </div>
        <div className={style.buttons}>
          <button className={style.button}>
            <Link to={"/update/" + this.props.element.id}>Update</Link>
          </button>
          <button
            className={style.button}
            onClick={() => {
              this.props.deleteItem(this.props.element.id);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  element: PropTypes.object,
  deleteItem: PropTypes.func,
};

export default TodoItem;
