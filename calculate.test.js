import calculate from './src/logic/calculate';
import operate from './src/logic/operate';

describe('calculate and operate function tests', () => {
  it('resets the calculator when the AC button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('concatenates digit button presses to the next number to operate on', () => {
    const result1 = calculate({ next: '1' }, '2');
    expect(result1).toEqual({ next: '12', total: null });

    const result2 = calculate({ operation: '+' }, '3');
    expect(result2).toEqual({ next: '3', total: null, operation: '+' });
  });

  it('handles a leading zero correctly when concatenating digit button presses', () => {
    const result = calculate({ next: '0' }, '0');
    expect(result).toEqual({});
  });

  it('adds a decimal point to the next number to operate on', () => {
    const result1 = calculate({ next: '1' }, '.');
    expect(result1).toEqual({ next: '1.', total: null });

    const result2 = calculate({ operation: '+' }, '.');
    expect(result2).toEqual({ next: '0.', total: null, operation: '+' });

    const result3 = calculate({ total: '10' }, '.');
    expect(result3).toEqual({ next: '10.', total: null });
  });

  it('handles adding multiple decimal points to the next number to operate on', () => {
    const result = calculate({ next: '1.23' }, '.');
    expect(result).toEqual({ next: '1.23', total: null });
  });

  it('negates the next number to operate on', () => {
    const result1 = calculate({ next: '5' }, '+/-');
    expect(result1).toEqual({ next: '-5' });

    const result2 = calculate({ total: '10' }, '+/-');
    expect(result2).toEqual({ total: '-10' });
  });

  it('handles the addition operator correctly', () => {
    const result = operate('10', '5', '+');
    expect(result).toBe('15');
  });

  it('handles the subtraction operator correctly', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });

  it('handles the multiplication operator correctly', () => {
    const result = operate('10', '5', 'x');
    expect(result).toBe('50');
  });

  it('handles the division operator correctly', () => {
    const result1 = operate('10', '5', '÷');
    expect(result1).toBe('2');

    const result2 = operate('10', '0', '÷');
    expect(result2).toBe("Can't divide by 0.");
  });

  it('handles the modulo operator correctly', () => {
    const result1 = operate('10', '3', '%');
    expect(result1).toBe('1');

    const result2 = operate('10', '0', '%');
    expect(result2).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error when given an unknown operator', () => {
    expect(() => operate('10', '5', '&')).toThrow("Unknown operation '&'");
  });
});
