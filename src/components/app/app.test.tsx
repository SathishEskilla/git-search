import React from 'react';
import { render } from '@testing-library/react';
import { App as App } from './app';

describe('testing <App /> component', () => {
  test('renders correctly', async () => {
    const appComponent = render(<App />);
    expect(appComponent).toMatchSnapshot();
  });

  test('rendering github text in component', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText('GitHub Searcher');
    expect(headerElement).toBeInTheDocument();
  })
});
