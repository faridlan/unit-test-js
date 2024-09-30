test('test array', () => {
  const names = ["John", "Doe"];
  expect(names).toContain("John");
  expect(names).toEqual(["John", "Doe"]);

  const persons = [{ name: "John" }, { name: "Doe" }];
  expect(persons).toContainEqual({ name: "Doe" });
  expect(persons).toEqual([{ name: "John" }, { name: "Doe" }]);
})
