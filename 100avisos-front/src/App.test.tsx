import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders app title', () => {
    render(<App />);
    const linkElement = screen.getByText(/100 Avisos/i);
    expect(linkElement).toBeInTheDocument();
  });
});
