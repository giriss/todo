import React from 'react';

function Todo({ title, completed, onClick }) {
  let textStyle;
  if (completed) {
    textStyle = {textDecoration: 'line-through'};
  } else {
    textStyle = {};
  }

  return <li onClick={onClick} style={textStyle}>{title}</li>;
}

export default Todo;
