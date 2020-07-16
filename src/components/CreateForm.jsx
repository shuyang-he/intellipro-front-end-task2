import React, { Component } from "react";
import PropTypes from "prop-types";
import Whiteboard from "../containers/Whiteboard";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createSubmit } from "../actions/createItem";

const style = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "large",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  input: {
    marginBottom: "10px",
    padding: "5px",
  },
  button: {
    backgroundColor: "#3366ff",
    padding: "0.5em",
  },
};

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
          style={style.form}
          onSubmit={(event) => {
            event.preventDefault();
            this.props.submit(this.state.body);
            this.setState({ redirect: true });
          }}
        >
          <div style={style.content}>
            <label style={style.label}>New Item</label>
            <input
              style={style.input}
              type="text"
              onChange={(event) => {
                this.handler("body", event);
              }}
            />
          </div>
          <button style={style.button} type="submit">
            Submit
          </button>
        </form>
      </Whiteboard>
    );
  }
}

CreateForm.propTypes = {
  handler: PropTypes.func,
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
