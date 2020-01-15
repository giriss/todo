import React from 'react';
import PropTypes from 'prop-types';

function Todo({ title, completed, onClick }) {
  let textStyle;
  if (completed) {
    textStyle = { textDecoration: 'line-through' };
  } else {
    textStyle = {};
  }

  return (
    <li style={textStyle}>
      <span
        onClick={onClick}
        onKeyPress={(event) => { if (event.key === 'Enter') { onClick(event); } }}
        role="button"
        tabIndex="0"
      >
        {title}
      </span>
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};

Todo.defaultProps = {
  onClick() {},
  completed: false,
};

export default Todo;
