import { sum, sumAll } from "../src/sum";

test("test sum function 1", () => {

  const result = sum(1, 2);
  expect(result).toBe(3);

})

test("test sum function 2", () => {

  const result = sum(1, 2);
  expect(result).toBe(3);

})

test("test sum function 3", () => {

  const result = sum(1, 2);
  expect(result).toBe(3);

})


test('test sumAll', () => {
  const numbers = [10, 10, 10, 10];
  expect(sumAll(numbers)).toBe(40);
})