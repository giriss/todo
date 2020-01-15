import React from 'react';
import PropTypes from 'prop-types';

function Todo({ title, completed, onClick }) {
  let textStyle;
  if (completed) {
    textStyle = {textDecoration: 'line-through'};
  } else {
    textStyle = {};
  }

  return <li onClick={onClick} style={textStyle}>{title}</li>;
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClick: PropTypes.func
}

Todo.defaultProps = {
  completed: false
}

export default Todo;
