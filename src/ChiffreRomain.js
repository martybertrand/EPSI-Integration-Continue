export default class ChiffreRomain {
    constructor() {
        this.chiffreRomain = ""
        this.romanNumList = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        }
    }

    Convertion(number) {

        let a

        if(number < 1 || number > 3999){
            this.chiffreRomain = 0
        } else {
            for(let key in this.romanNumList){
                a = Math.floor(number / this.romanNumList[key]);
                if(a >= 0){
                    for(let i = 0; i < a; i++){
                      this.chiffreRomain += key;
                    }
                  }
                number = number % this.romanNumList[key];
            }
        }
    }

    GetChiffreRomain() {
        return this.chiffreRomain
    }
}
