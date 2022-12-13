const calculator = require('./calculator');

describe('Calculator', () => {
  const Calculator = new calculator();
  test('adds 1 + 2 to equal 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  test('adds 2 + 2 to equal 4', () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });
  test('adds 3 + 2 to equal 5', () => {
    expect(Calculator.add(3, 2)).toBe(5);
  });
  test('multiply 2 and 2 to give 4', () => {
    expect(Calculator.mulitply(2, 2)).toBe(4);
  });
  test('multiply 2 and 3 to give 6', () => {
    expect(Calculator.mulitply(2, 3)).toBe(6);
  });
  test('multiply 3 and 3 to give 9', () => {
    expect(Calculator.mulitply(3, 3)).toBe(9);
  });
  test('divide 4 by 2 to give 2', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  });
  test('divide 9 by 3 to give 3', () => {
    expect(Calculator.divide(9, 3)).toBe(3);
  });
  test('divide 16 by 3 to give 4', () => {
    expect(Calculator.divide(16, 4)).toBe(4);
  });
  test('Subtract 1 from 3 to give 2', () => {
    expect(Calculator.subtract(3, 1)).toBe(2);
  });
  test('Subtract 10 from 100 to give 90', () => {
    expect(Calculator.subtract(100, 10)).toBe(90);
  });
  test('Subtract 7 from 10 to give 3', () => {
    expect(Calculator.subtract(10, 7)).toBe(3);
  });
});
