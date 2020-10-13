import { DefaultTest } from "../code/default-test";

test('basic', () => {
    let thisClass = new DefaultTest();
    thisClass.testTest('Nathan')
    expect(thisClass.testTest('Nathan')).toBe(`Hello, Nathan, the basic test works`);
  });