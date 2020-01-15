export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(title) {
  return { type: ADD_TODO, title };
}

export function toggleTodo(title) {
  return { type: TOGGLE_TODO, title };
}
