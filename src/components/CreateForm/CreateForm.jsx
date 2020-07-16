import React, { Component } from "react";
import PropTypes from "prop-types";
import Whiteboard from "../../containers/Whiteboard";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createSubmit } from "../../actions/createItem";
import style from "./CreateForm.css";

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
          className={style.form}
          onSubmit={(event) => {
            event.preventDefault();
            this.props.submit(this.state.body);
            this.setState({ redirect: true });
          }}
        >
          <div className={style.content}>
            <label className={style.label}>New Item</label>
            <input
              className={style.input}
              type="text"
              onChange={(event) => {
                this.handler("body", event);
              }}
            />
          </div>
          <button className={style.button} type="submit">
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
