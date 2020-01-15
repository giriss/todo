import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos';

test('renders todos', () => {
  const { getByText } = render(<Todos items={[]} />);
  const linkElement = getByText(/0 Todo/i);
  expect(linkElement).toBeInTheDocument();
});
