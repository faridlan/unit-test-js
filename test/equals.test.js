test("test toBe", () => {
  let name = "john";
  let hello = `hello ${name}`;

  expect(hello).toBe("hello john");
})


test("test toEquals", () => {
  let person = { id: "john" };
  Object.assign(person, { name: "John" });

  expect(person).toEqual({ id: "john", name: "John" });
})