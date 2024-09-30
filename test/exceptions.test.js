import { MyException, callMe } from "../src/exception";

test('test exception', () => {
  expect(() => callMe("john")).toThrow();
  expect(() => callMe("john")).toThrow(MyException);
  expect(() => callMe("john")).toThrow("Ups my exception happens");
})

test('exception not happens', () => {
  expect(callMe("Buudi")).toBe("OK")
})