import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color (red)', () => {
  render(<App />);
  const colorButton = screen.getAllByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({'background-color': 'red'});
});
test('button turns blue when clicked, and return to red when clicked again', () => {
  render(<App />);
  const colorButton = screen.getAllByRole('button', { name: 'Change to blue' });
  colorButton.simulate('click');
  expect(colorButton).toHaveStyle({'background-color': 'blue'});
  expect(colorButton).toHaveTextContent('Change to red');
});
test('background has correct initial color (green)', () => {
  render(<App />);
  const backgroundApp = screen.querySelector('.main-container');
  expect(backgroundApp).toHaveStyle({'background-color':'green'});
});
test('app has text header "React Testing library"', () => {
  render(<App />);
  const header = screen.getByText('React Testing library');
  expect(header).toHaveStyle('h1');
});

