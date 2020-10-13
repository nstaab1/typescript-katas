import { OctoberEighth } from "../code/oct-8-2020";

describe('isSquare tests', () => {
    let thisClass: OctoberEighth; 

    beforeEach(() => {
        thisClass = new OctoberEighth();
    });

    test('If abracadabra, should be 5', () => {
        expect(thisClass.getVowelCount('abracadabra')).toBe(5);
    });

    test('If abcdy, should be 1', () => {
        expect(thisClass.getVowelCount('abcdy')).toBe(1);
    });

    test('If empty string, should be 0', () => {
        expect(thisClass.getVowelCount('')).toBe(0);
    });

    test('If undefined, should be 0', () => {
        expect(thisClass.getVowelCount('')).toBe(0);
    });

    test('If sdfs eusd , should be 2', () => {
        expect(thisClass.getVowelCount('sdfs eusd ')).toBe(2);
    });
})