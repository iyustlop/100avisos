import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app with navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/100 Avisos/i);
  expect(linkElement).toBeInTheDocument();
});
