import { DefaultTest } from "../code/default-test";

test.skip('basic', () => {
    let thisClass = new DefaultTest();
    thisClass.testTest('Nathan')
    expect(thisClass.testTest('Nathan')).toBe(`Hello, Nathan, the basic test works`);
  });