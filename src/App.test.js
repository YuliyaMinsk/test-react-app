import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import App from './App';

// screen.debug();
test('button has correct initial color (red)', () => {
  const { container } = render(<App />);
  // logRoles(container); // cool to debug too
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveClass('red');
});

test('button turns blue when clicked, and return to red when clicked again', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveClass('blue');
  expect(colorButton).toHaveTextContent('Change to red');
});

test('app has text header "React Testing library"', () => {
  render(<App />);
  const header = screen.getByText(/React Testing library/i);
  expect(header).toBeInTheDocument();
});

test('initial status: button is enabled, checkbox is out unchecked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('if checkbox is checked, button should be disabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('if checkbox is checked, button should be in gray', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveClass('disable');
  expect(colorButton).toBeDisabled();
  fireEvent.click(colorButton);
  expect(colorButton).toHaveTextContent('Change to blue');

  fireEvent.click(checkbox);
  expect(colorButton).not.toHaveClass('disable');
  expect(colorButton).toBeEnabled();
  fireEvent.click(colorButton);
  expect(colorButton).toHaveTextContent('Change to red');
});
