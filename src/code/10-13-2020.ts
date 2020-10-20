
export class OctoberThirteenth {
    // Consider an array/list of sheep where some sheep may be missing from their place. 
    // We need a function that counts the number of sheep present in the array (true means present).
    
    public countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
        let count = 0;
        arrayOfSheep.forEach(
            (sheep:boolean | undefined | null)  => {
                if (sheep) {
                    count++;
                }
            }
        );

        return count;

        // Could have also just filtered on boolean
        // return arrayOfSheep.filter(Boolean).length;
    }


    // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
    // If the function is passed a valid PIN string, return true, else return false.
    public validatePin(pin: string): boolean {
        pin = pin.replace(/\D/g,'');
        return pin.length !== 4 && pin.length !==6;
        // throw new Error("The method or operation is not implemented.");
    }
}