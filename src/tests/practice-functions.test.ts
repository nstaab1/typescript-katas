import { PracticeFunctions } from "../code/practice-functions";

describe.skip('Street Fighter Function', () => {
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

})

describe.skip('Prize Draw Tests', () => {
    let thisClass: PracticeFunctions;

    beforeEach(() => {
        thisClass = new PracticeFunctions();
    });
     
    test('Default', () => {
        expect(1).toEqual(1);
    });

    test('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin, [4, 2, 1, 4, 3, 1, 2], 4; To return Benjamin', () => {
        const res: string = thisClass.rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4);
        expect(res).toEqual('Benjamin');
    });

    test('Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden, [1, 3, 5, 5, 3, 6], 2; To return Matthew', () => {
        const res: string = thisClass.rank('Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden', [1, 3, 5, 5, 3, 6], 2);
        expect(res).toEqual('Matthew');
    });

    test('Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth, [3, 1, 4, 4, 3, 2], 4; To return Abigail', () => {
        const res: string = thisClass.rank('Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth', [3, 1, 4, 4, 3, 2], 4);
        expect(res).toEqual('Abigail');
    });

    test('Lagon,Lily, [1, 5], 2; To return Lagon', () => {
        const res: string = thisClass.rank('Lagon,Lily', [1, 5], 2);
        expect(res).toEqual('Lagon');
    });
})

describe.skip('Base 64', () => {
    let thisClass: PracticeFunctions;

    beforeEach(() => {
        thisClass = new PracticeFunctions();
    });
     
    test('Converts string  to Base 64', () => {
        let enc = thisClass.toBase64('this is a string!!');
        expect(enc).toEqual('dGhpcyBpcyBhIHN0cmluZyEh');
    });

    test('Converts base64 to string', () => {
        let enc = thisClass.fromBase64('dGhpcyBpcyBhIHN0cmluZyEh');
        expect(enc).toEqual('this is a string!!');
    });
})

describe('Maze Runner', () => {
    let thisClass: PracticeFunctions;
    let maze = [[1,1,1,1,1,1,1],
                [1,0,0,0,0,0,3],
                [1,0,1,0,1,0,1],
                [0,0,1,0,0,0,1],
                [1,0,1,0,1,0,1],
                [1,0,0,0,0,0,1],
                [1,2,1,0,1,0,1]];

    beforeEach(() => {
        thisClass = new PracticeFunctions();
    });
     
    test('Expect to finish', () => {
        let enc = thisClass.mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])
        expect(enc).toEqual('Finish');
    });

    test('Expect to finish', () => {
        let enc = thisClass.mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])
        expect(enc).toEqual('Finish');
    });

    test('Expect to finish', () => {
        let enc = thisClass.mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"])
        expect(enc).toEqual('Finish');
    });

    test('Expect to be Dead', () => {
        let enc = thisClass.mazeRunner(maze,["N","N","N","W","W"])
        expect(enc).toEqual('Dead');
    });

    test('Expect to be Dead', () => {
        let enc = thisClass.mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"])
        expect(enc).toEqual('Dead');
    });

    test('Expect to be Lost', () => {
        let enc = thisClass.mazeRunner(maze,["N","E","E","E","E"])
        expect(enc).toEqual('Lost');
    });

})

