import React, { useRef } from 'react';

function TodoAdder({ onAdd }) {
  const input = useRef();

  return (
    <>
      <input ref={input} placeholder="New todo" />
      <button
        onClick={() => {
          onAdd(input.current.value);
          input.current.value = '';
        }}
      >
        Add
      </button>
    </>
  );
}

export default TodoAdder;
