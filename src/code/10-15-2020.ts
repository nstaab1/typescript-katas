export class OctoberFifteenth {

    constructor() {
    }

    // There was a test in your class and you passed it. Congratulations!
    // But you're an ambitious person. You want to know if you're better than the average student in your class.
    // You receive an array with your peers' test scores. Now calculate the average and compare your score!

    public betterThanAverage(classPoints: number[], yourPoints: number) {
        classPoints.push(yourPoints)
        classPoints.reduce((a: number, b: number) => a+b);
        const average = classPoints.reduce((a: number, b: number) => a+b) / classPoints.length;

        return yourPoints > average;
    }
    
}