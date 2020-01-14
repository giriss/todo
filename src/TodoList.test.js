import React from 'react';
import { render, act } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  let onItemClick;

  beforeEach(() => {
    onItemClick = jest.fn();
    act(() => {
      render(
        <TodoList
          todos={[{title: 'One'}, {title: 'Two', completed: true}, {title: 'Three'}]}
          onItemClick={onItemClick}
        />
      )
    })
  })

  it('has 3 items', () => {
    expect(document.querySelectorAll('li')).toHaveLength(3)
  })

  it('calls onItemClick with the correct value', () => {
    act(() => {
      document.querySelector('li:nth-child(2)').dispatchEvent(new MouseEvent("click", { bubbles: true }));
    })

    expect(onItemClick).toHaveBeenNthCalledWith(1, { title: 'Two', completed: true })
  })
});
