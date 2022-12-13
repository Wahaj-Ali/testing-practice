const stringLength = require('./stringlength.js');

test("counts the number of characters in the string 'Hello' to be 5, count should be between 1 and 11", () => {
  const str1 = 'Hello';
  let lengthOfString = stringLength(str1);
  expect(lengthOfString).toBe(5);
});

test('counts the number of characters in the string, count should be between 1 and 11', () => {
  const str2 = 'Hello Peep';
  let lengthOfString = stringLength(str2);
  expect(lengthOfString).toBe(10);
});
