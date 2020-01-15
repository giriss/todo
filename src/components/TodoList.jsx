import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo {...todo} key={todo.title} onClick={() => onToggle(todo.title)} />
      )}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })),
  onToggle: PropTypes.func
}

export default TodoList;
