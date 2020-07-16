import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

const style = {
  li: {
    height: "70px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0033cc",
    margin: "10px",
    padding: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: "10px",
  },
  button: {
    backgroundColor: "#3366ff",
  },
};

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
      <li style={style.li}>
        <div style={style.item}>
          <h2>{this.props.element.body}</h2>
        </div>
        <div style={style.buttons}>
          <button style={style.button}>
            <Link to={"/update/" + this.props.element.id}>Update</Link>
          </button>
          <button
            style={style.button}
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
