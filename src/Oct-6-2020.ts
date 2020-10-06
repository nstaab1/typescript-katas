export class OctoberSixth {
    // public duplicateEncode(word: string){
    //     let encoded :string[] = [];
    //     for(let i = 0; i < word.length; i++) {
    //         let char = '';
    //         for(let j = 0; j < word.length; j++) {
    //             if(i !== j) {
    //                 if(word[i].toLowerCase() === word[j].toLowerCase()) {
    //                     char = ')';
    //                     break;
    //                 }
    //             }
    //         }
    //         if (char === '') {
    //             char = '(';
    //         }
    //         encoded.push(char);
    //     }
    //     return encoded.join('');
    // }

    public duplicateEncode(word: string){
        // let dict : Record<string, number> = {};
        // Better solution: add the characters to a dictionary.
        const dict: Record<any, any> = {};
  
        for (let ch of word) {
          if (dict[ch.toLowerCase()]) {
            dict[ch.toLowerCase()] = ')';
          } else {
            dict[ch.toLowerCase()] = '(';
          }
        }
        
        return word.split('').map(ch => dict[ch.toLowerCase()]).join('');
    }

    public isSquare(n: number): boolean {
        return Number.isInteger(Math.sqrt(n)); // fix me
    };
}