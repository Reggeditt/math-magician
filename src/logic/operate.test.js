// import '@testing-library/react';
// import operate from './operate';

// describe('operate', () => {
//   it('adds two numbers', () => {
//     expect(operate('5', '3', '+')).toEqual('8');
//   });

//   it('subtracts two numbers', () => {
//     expect(operate('5', '3', '-')).toEqual('2');
//   });

//   it('multiplies two numbers', () => {
//     expect(operate('5', '3', 'x')).toEqual('15');
//   });

//   it('divides two numbers', () => {
//     expect(operate('15', '3', '÷')).toEqual('5');
//   });

//   it('throws an error for unknown operation', () => {
//     expect(() => operate('5', '3', '&')).toThrowError(
//       "Unknown operation '&'",
//     );
//   });

//   it('returns "Can\'t divide by 0." when dividing by 0', () => {
//     expect(operate('5', '0', '÷')).toEqual("Can't divide by 0.");
//   });

//   it('returns "Can\'t find modulo as can\'t divide by 0." when finding modulo by 0', () => {
//     expect(operate('5', '0', '%')).toEqual(
//       "Can't find modulo as can't divide by 0.",
//     );
//   });
// });
