import '@testing-library/react';
import calculate from './calculate';

test('should return an empty object when the "AC" button is pressed', () => {
  const obj = {
    total: 15,
    next: 5,
    operation: '+',
  };

  const result = calculate(obj, 'AC');
  expect(result).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

test('should return the correct result when "=" button is pressed', () => {
  const obj = {
    total: 15,
    next: 5,
    operation: '+',
  };

  const result = calculate(obj, '=');
  expect(result).toEqual({
    total: '20',
    next: null,
    operation: null,
  });
});
