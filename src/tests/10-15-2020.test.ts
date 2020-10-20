import { OctoberFifteenth } from "../code/10-15-2020";

describe.skip('count Sheep tests', () => {
    let thisClass: OctoberFifteenth; 

    beforeEach(() => {
        thisClass = new OctoberFifteenth();
    });

    test('If ([2, 3], 5), should return True', () => {
        expect(thisClass.betterThanAverage([2, 3], 5)).toBeTruthy();
    });

    test('If ([100, 40, 34, 57, 29, 72, 57, 88], 75), should return True', () => {
        expect(thisClass.betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toBeTruthy();
    });

    test('If ([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), should return True', () => {
        expect(thisClass.betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toBeTruthy();
    });

    test('If ([12, 23, 34, 45, 56, 67, 78, 89, 90], 24), should return False', () => {
        expect(thisClass.betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 24)).toBeFalsy();
    });
})