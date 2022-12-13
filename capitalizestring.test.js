const capitalizeString = require('./capitalizestring');

test("Capitalize 'name' to 'NAME' ", () => {
  const string = 'name';
  const capitalizedString = capitalizeString(string);
  expect(capitalizedString).toEqual('NAME');
});

test("Capitalize 'wahaj' to 'WAHAJ' ", () => {
  const string = 'wahaj';
  const capitalizedString = capitalizeString(string);
  expect(capitalizedString).toEqual('WAHAJ');
});
