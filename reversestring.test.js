const reverseString = require('./reversestring');

test('should first', () => {
  let string1 = 'Book';
  let reversedString = reverseString(string1);
  expect(reversedString).toEqual('kooB');
});
