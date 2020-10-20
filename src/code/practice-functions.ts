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

}