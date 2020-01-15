import { ADD_TODO, TOGGLE_TODO } from './actions';
import { combineReducers } from 'redux';

function todos(state = [], { type, title }) {
  switch (type) {
    case ADD_TODO:
      return [...state, { title }];
    case TOGGLE_TODO:
      const todo = state.find(item => item.title === title);
      todo.completed = !todo.completed;
      return [...state];
    default:
      return [...state];
  }
}

export default combineReducers({ todos });
