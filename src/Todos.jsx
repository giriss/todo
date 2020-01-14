import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';

function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todos</h1>
      <TodoList
        todos={todos}
        onItemClick={todo => {
          const _todo = todos[todos.indexOf(todo)];
          _todo.completed = !_todo.completed;
          setTodos([...todos]);
        }}
      />
      <TodoAdder onAdd={title => setTodos([...todos, { title }])} />
    </>
  );
}

export default Todos;
