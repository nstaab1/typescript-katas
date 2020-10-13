export class OctoberEighth {

    public getVowelCount(str: string) {
        let vowelCount = 0;
        const vowels: string[] = ['a','e','i','o','u'];

        if (str) {
            str.split('').map((char) => {
                if (vowels.indexOf(char) >= 0) {
                    vowelCount++;
                }
            });
        };
        return vowelCount;


        // INITIAL SOLUTION:
        // for (let char of str) {
        //     if (vowels.includes(char)) {
        //         vowelCount++;
        //     }
        // }

        // COOL SOLUTION USING REGEX
        // let list = str.match(/[aeiou]/gi);
        // return list ? list.length : 0;

    }
}