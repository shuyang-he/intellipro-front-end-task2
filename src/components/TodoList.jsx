import React from 'react';
import PropTypes from 'prop-types';
import Whiteboard from '../containers/Whiteboard';
import TodoItem from './TodoItem';

const todoList = ({
  data,
  deleteItem
}) => {
  return (
    <Whiteboard>
      <ul>
        {data.map((element) => {
          return (
            <TodoItem key={element.id} element={element} deleteItem={deleteItem}/>
          );
        })}
      </ul>
    </Whiteboard>
  );
};

todoList.propTypes = {
  data: PropTypes.array,
  deleteItem: PropTypes.func
};

export default todoList;
