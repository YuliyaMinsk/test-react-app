import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import App from './App';
import { camelCaseColorWithSpace } from './App';

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

describe('check function camelCaseColorWithSpace', () => {
  test('check work with none argument', () => {
    expect(camelCaseColorWithSpace('')).toBe('');
  });
  test('check work with only one capital letter', () => {
    expect(camelCaseColorWithSpace('Red')).toBe('Red');
  });
  test('check work with two capital letters', () => {
    expect(camelCaseColorWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });
  test('check work with multiple capital letters', () => {
    expect(camelCaseColorWithSpace('MediumVioletRed')).toBe(
      'Medium Violet Red'
    );
  });
});
