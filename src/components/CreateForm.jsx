import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Whiteboard from '../containers/Whiteboard';
import { Redirect } from 'react-router-dom';

class CreateForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render () {
    return (
      this.state.redirect ? <Redirect to='/' />
        : <Whiteboard>
          <form onSubmit={() => {
            this.props.createSubmit();
            this.setState({ redirect: true });
          }}>
            <label>New Item: </label>
            <input type='text' onChange={(event) => { this.props.createHandler(event); }}/>
            <button type='submit'>Submit</button>
          </form>
        </Whiteboard>
    );
  };
};

CreateForm.propTypes = {
  createHandler: PropTypes.func,
  createSubmit: PropTypes.func
};

export default CreateForm;
