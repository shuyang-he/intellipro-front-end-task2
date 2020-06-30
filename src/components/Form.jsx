import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Whiteboard from '../containers/Whiteboard';
import { Redirect } from 'react-router-dom';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render () {
    let body = '';
    if (this.props.item.body !== undefined && this.props.item.body !== null) {
      body = this.props.item.body;
    }
    return (
      this.state.redirect ? <Redirect to='/' />
        : <Whiteboard>
          <form onSubmit={() => {
            this.props.submit();
            this.setState({ redirect: true });
          }}>
            <label>{this.props.label}</label>
            <input type='text' value={body}
              onChange={(event) => {
                this.props.handler(event);
              }}
              onFocus={this.props.createItem}
            />
            <button type='submit'>Submit</button>
          </form>
        </Whiteboard>
    );
  };
};

Form.propTypes = {
  item: PropTypes.object,
  label: PropTypes.string,
  handler: PropTypes.func,
  createItem: PropTypes.func,
  submit: PropTypes.func
};

export default Form;
