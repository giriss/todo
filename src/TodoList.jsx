import React from 'react';
import Todo from './Todo';

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo {...todo} key={todo.title} onClick={() => onComplete(todo)} />
      )}
    </ul>
  );
}

export default TodoList;
