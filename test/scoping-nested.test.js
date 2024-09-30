beforeEach(() => console.info("Before Each 1"));
afterEach(() => console.info("After Each 1"));

test('test outer 1', () => console.info("Test Outer 1"));

describe("inner scope", () => {

  beforeEach(() => console.info("Inner Before Each 1"));
  afterEach(() => console.info("Inner After Each 1"));
  test('test inner 1', () => console.info("Test Inner 1"));

  describe("inner inner scope", () => {
    beforeEach(() => console.info("Inner Inner Before Each 1"));
    afterEach(() => console.info("Inner Inner After Each 1"));
    test('test inner inner 1', () => console.info("Test Inner Inner 1"));
    test('test inner inner 2', () => console.info("Test Inner Inner 2 "));
  })

})