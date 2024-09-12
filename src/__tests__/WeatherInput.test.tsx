import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WeatherInput from '../components/WeatherInput';

test('validates input and calls onSearch with correct data', () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(<WeatherInput onSearch={mockOnSearch} />);

  const input = getByPlaceholderText('Enter Location');
  fireEvent.changeText(input, 'New York');

  fireEvent.press(getByText('Search'));
  expect(mockOnSearch).toHaveBeenCalledWith('New York');
});
