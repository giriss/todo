import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import TodoAdder from './TodoAdder';

function Todos({ items, onAdd, onToggle }) {
  return (
    <>
      <h1>
        {`${items.length} `}
        Todo
        {items.length > 1 ? 's' : ''}
      </h1>
      <TodoList todos={items} onToggle={onToggle} />
      <TodoAdder onAdd={onAdd} />
    </>
  );
}

Todos.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
  onAdd: PropTypes.func,
  onToggle: PropTypes.func,
};

Todos.defaultProps = {
  onToggle() {},
  onAdd() {},
};

export default Todos;
