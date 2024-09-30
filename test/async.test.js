import { sayHelloAsync } from "../src/async";

test('test async function', async () => {
  const result = await sayHelloAsync("John");
  expect(result).toBe("Hello John");
})

test('test async matchers', async () => {
  await expect(sayHelloAsync("John")).resolves.toBe("Hello John");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
})