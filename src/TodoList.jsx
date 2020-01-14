import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

function TodoList({ todos, onItemClick }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo {...todo} key={todo.title} onClick={() => onItemClick(todo)} />
      )}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })),
  onItemClick: PropTypes.func
}

export default TodoList;
