import { NameRank } from "./interfaces-class";

export class PracticeFunctions {
    // Street Fighter Character Selection
    // https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript
    public streetFighterSelection(fighters: Array<string[]>, initialPosition: number[], moves: string[]) {
        let selectionPath: string[] = [];

        if (initialPosition.length !== 2) {
            return [];
        }

        let vertical = initialPosition[0];
        let horizontal = initialPosition[1];

        moves.forEach((move: string) => {
            switch (move) {
                case 'up':
                    vertical = 0;
                    break;
                case 'down':
                    vertical = 1;
                    break;
                case 'left':
                    if (horizontal === 0 ) {
                        horizontal = fighters[0].length -1;
                    } else {
                        horizontal--;
                    }
                    break;
                case 'right':
                    if (horizontal === fighters[0].length -1) {
                        horizontal = 0;
                    } else {
                        horizontal++;
                    }
                    break;
            }
            selectionPath.push(fighters[vertical][horizontal]);
        });

        return selectionPath;

        // I could have used .map because that already creates an array
    }

    // https://www.codewars.com/kata/5616868c81a0f281e500005c/train/typescript
    public rank(names: string, nameWeights: number[], rankToFind: number): string {
        const  alphabet = "abcdefghijklmnopqrstuvwxyz";

        if (!names || names.length <= 0 ) {
            return 'No participants';
        }

        if (names.split(',').length < rankToFind ) {
            return 'Not enough participants';
        }

        const nameValues: NameRank[] = names.split(',').map(
            (name: string, index) => {
                let nameValue = name.length;
                for (const char of name) {
                    let num = alphabet.indexOf(char.toLowerCase());
                    nameValue += num + 1;
                }
                return {value: nameValue * nameWeights[index], name}
            }
        );

        nameValues.sort((a: NameRank, b: NameRank) => {
            if (b.value === a.value) {
                if (b.name.toLowerCase() < a.name.toLowerCase()) {
                    return 1;
                } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1
                } else {
                    return 0;
                }
            } else {
                return b.value - a.value;
            }
        })
        return nameValues[rankToFind - 1].name;
    }

    // https://www.codewars.com/kata/5616868c81a0f281e500005c/train/typescript
    public toBase64(str: string): string {
        return Buffer.from(str).toString('base64');
    }

    public fromBase64(str: string): string {
        return Buffer.from(str, 'base64').toString('ascii');
    }

    public mazeRunner(maze:number[][], directions:string[]): string{
        // Good luck
        let activePosition: ActivePosition = {activeArray: -1, activeIndex: -1}

        maze.forEach(
            (arr:number[], index) => {
                if (arr.includes(2)) {
                    activePosition = {activeArray: index, activeIndex: arr.indexOf(2)}
                }
            }
        );

        for (let direction of directions) {
            switch(direction) {
                case 'N':
                    activePosition.activeArray--;
                    // this.checkPosition(maze, activePosition);
                    break;
                case 'S':
                    activePosition.activeArray++;
                    // this.checkPosition(maze, activePosition);
                    break;  
                case 'E':
                    activePosition.activeIndex++;
                    // this.checkPosition(maze, activePosition);
                    break;
                case 'W':
                    activePosition.activeIndex--;
                    // this.checkPosition(maze, activePosition);
                    break;
                default:
                    break;
            }
            try {
                if (maze[activePosition.activeArray][activePosition.activeIndex] === undefined || maze[activePosition.activeArray][activePosition.activeIndex] === 1 ) {
                    return 'Dead';
                } else if (maze[activePosition.activeArray][activePosition.activeIndex] === 3) {
                    return 'Finish';
                }
            } catch  (e) {
                return 'Dead';
            }

        }
        return 'Lost';
    }
}

interface ActivePosition {
    activeArray: number,
    activeIndex: number
}

