import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator', () => {
  it('renders the component', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('updates the display when a button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByText('3')).toBeInTheDocument();
  });

  it('clears the display when the AC button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('AC'));
    expect(getByText('0')).toBeInTheDocument();
  });
});
