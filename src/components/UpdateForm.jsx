import React, { Component } from "react";
import PropTypes from "prop-types";
import Whiteboard from "../containers/Whiteboard";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateSubmit } from "../actions/updateItem";

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

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: 0,
      body: "",
      completed: false,
    };
    this.handler = this.handler.bind(this);
  }

  handler(name, event) {
    this.setState({ [name]: event.target.value });
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const index = this.props.data.findIndex((item) => {
      return item.id === id;
    });
    if (index === -1) {
      this.setState({ redirect: true });
    } else {
      const item = this.props.data[index];
      this.setState({
        id: item.id,
        body: item.body,
        completed: item.completed,
      });
    }
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
            this.props.submit({
              id: this.state.id,
              body: this.state.body,
            });
            this.setState({ redirect: true });
          }}
        >
          <div style={style.content}>
            <label style={style.label}>Update Item {this.state.id}</label>
            <input
              style={style.input}
              type="text"
              value={this.state.body}
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

UpdateForm.propTypes = {
  data: PropTypes.array,
  submit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    data: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: ({ id, body, completed }) => {
      dispatch(updateSubmit({ id, body, completed }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
