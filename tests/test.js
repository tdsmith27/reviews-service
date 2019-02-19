const {average} = require('../client/helpers.js');

test('averages 0, 5, and 10 to equal 5', () => {
  const reviews = [{rating:0},{rating:5},{rating:10}];

  expect(average(reviews)).toEqual(5);
});

test('jest-test', () => expect(3).toBe(3));

