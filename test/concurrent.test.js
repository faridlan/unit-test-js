import { sayHelloAsync } from "../src/async";

test.concurrent('concurrent', async () => {
  await expect(sayHelloAsync("John")).resolves.toBe("Hello John");
});

test.concurrent('concurrent 2', async () => {
  await expect(sayHelloAsync("John")).resolves.toBe("Hello John");
});

test.concurrent('concurrent 3', async () => {
  await expect(sayHelloAsync("John")).resolves.toBe("Hello John");
});