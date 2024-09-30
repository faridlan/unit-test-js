import { sayHello } from "../src/sayHello";

test('sayHello Success', () => {
  expect(sayHello("John")).toBe("Hello John");
});

test.failing('sayHello error', () => {
  sayHello(null);
});