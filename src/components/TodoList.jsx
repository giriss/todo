/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.title} onClick={() => onToggle(todo.title)} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
  onToggle: PropTypes.func,
};

TodoList.defaultProps = {
  onToggle() {},
};

export default TodoList;
