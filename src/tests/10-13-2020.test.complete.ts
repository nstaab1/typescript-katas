import { OctoberThirteenth } from "../code/10-13-2020";

describe('count Sheep tests', () => {
    let thisClass: OctoberThirteenth; 

    beforeEach(() => {
        thisClass = new OctoberThirteenth();
    });

    test('Should return 17', () => {
        var array1 = [true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true ];

        const res = thisClass.countSheeps(array1);
        expect(res).toEqual(17)
    });
})

describe('Validate pin', () => {
    let thisClass: OctoberThirteenth; 

    beforeEach(() => {
        thisClass = new OctoberThirteenth();
    });

    test('If "1", should return false', () => {
        expect(thisClass.validatePin('1')).toBeFalsy;
    });

    test('If "12", should return false', () => {
        expect(thisClass.validatePin('12')).toBeFalsy;
    });

    test('If "123", should return false', () => {
        expect(thisClass.validatePin('123')).toBeFalsy;
    });

    test('If "12345", should return false', () => {
        expect(thisClass.validatePin('12345')).toBeFalsy;
    });

    test('If "", should return false', () => {
        expect(thisClass.validatePin('')).toBeFalsy;
    });

    test('If ".234", should return false', () => {
        expect(thisClass.validatePin('.234')).toBeFalsy;
    });

    test('If "a234", should return false', () => {
        expect(thisClass.validatePin('.234')).toBeFalsy;
    });

    test('If "1234", should return true', () => {
        expect(thisClass.validatePin('.234')).toBeTruthy;
    });

    test('If "123456", should return true', () => {
        expect(thisClass.validatePin('.234')).toBeTruthy;
    });
})