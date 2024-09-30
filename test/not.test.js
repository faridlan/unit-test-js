test('test string.nor', () => {
  const name = "John Doe";

  expect(name).not.toBe("Joko");
  expect(name).not.toEqual("Joko");
  expect(name).not.toMatch("/Joko/");
})

test('test numbers.not', () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
})