import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio home', () => {
  render(<App />);
  expect(screen.getByText(/Krati Goyal/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
});
