import React from 'react';
import PropTypes from 'prop-types';

const todoItem = ({
  key,
  element,
  deleteItem
}) => {
  return (
    <li>
      <h2>{element.body}</h2>
      <button onClick={() => {
        deleteItem(element.id);
      }}>Delete</button>
    </li>
  );
};

todoItem.propTypes = {
  key: PropTypes.number,
  element: PropTypes.object,
  deleteItem: PropTypes.func
};

export default todoItem;
