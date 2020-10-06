import { OctoberSixth } from "../Oct-6-2020";

// describe('duplicateEncode tests', () => {
//     let thisClass :OctoberSixth; 

//     beforeEach(() => {
//         thisClass = new OctoberSixth();
//     });

//     test('If din, should be (((', () => {
//         expect(thisClass.duplicateEncode('din')).toBe(`(((`);
//     });

//     test('If recede, should be ()()()', () => {
//         expect(thisClass.duplicateEncode('recede')).toBe(`()()()`);
//     });

//     test('If Success, should be )())())', () => {
//         expect(thisClass.duplicateEncode('Success')).toBe(`)())())`);
//     });

//     test('If (( @,, should be ))((', () => {
//         expect(thisClass.duplicateEncode('(( @')).toBe(`))((`);
//     });
// })

describe('isSquare tests', () => {
    let thisClass :OctoberSixth; 

    beforeEach(() => {
        thisClass = new OctoberSixth();
    });

    test('If -1, should be false', () => {
        expect(thisClass.isSquare(-1)).toBeFalsy();
    });
    
    test('If 0, should be true', () => {
        expect(thisClass.isSquare(0)).toBeTruthy();
    });

    test('If 3, should be false', () => {
        expect(thisClass.isSquare(3)).toBeFalsy();
    });

    test('If 4, should be true', () => {
        expect(thisClass.isSquare(4)).toBeTruthy();
    });

    test('If 25, should be true', () => {
        expect(thisClass.isSquare(25)).toBeTruthy();
    });

    test('If 26, should be false', () => {
        expect(thisClass.isSquare(26)).toBeFalsy();
    });

})

