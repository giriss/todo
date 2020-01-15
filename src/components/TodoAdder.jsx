import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function TodoAdder({ onAdd }) {
  const input = useRef();

  return (
    <form
      onSubmit={e => {
        e.stopPropagation();
        e.preventDefault();
        onAdd(input.current.value);
        input.current.value = '';
      }}
    >
      <input ref={input} placeholder="New todo" />
      <button>Add</button>
    </form>
  );
}

TodoAdder.propTypes = {
  onAdd: PropTypes.func
}

export default TodoAdder;
