import { PracticeFunctions } from "../code/practice-functions";

describe('Street Fighter Function', () => {
    let thisClass: PracticeFunctions; 
    const fighters = [ 
        ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
        ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ];

    beforeEach(() => {
        thisClass = new PracticeFunctions();

    });

    test('If no moves, empty array', () => {
        expect(thisClass.streetFighterSelection(fighters, [0,0],[])).toEqual([]);
    });

    test('Test movement only horizontal', () => {
        let moves = ['up', 'left', 'right', 'left', 'left'];
        expect(thisClass.streetFighterSelection(fighters, [0,0],moves)).toEqual(['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
    });

    test('Test movement all left', () => {
        let moves = ["left","left","left","left","left","left","left","left"];
        expect(thisClass.streetFighterSelection(fighters, [0,0],moves)).toEqual(['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);
    });

    test('Test movement all right', () => {
        let moves = ["right","right","right","right","right","right","right","right"];
        expect(thisClass.streetFighterSelection(fighters, [0,0],moves)).toEqual(['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
    });

    test('Test movement mixed', () => {
        let moves = ["up","left","down","right","up","left","down","right"];
        expect(thisClass.streetFighterSelection(fighters, [0,0],moves)).toEqual(['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
    });

    // test('If -1, should be false', () => {
    //     let moves = ['up', 'left', 'right', 'left', 'left'];
    //     expect(thisClass.streetFighterSelection(fighters, [0,0],moves)).toEqual(['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
    // });

})