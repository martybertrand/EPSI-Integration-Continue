export default class ChiffreRomain {
    constructor() {
        this.chiffreRomain = null
    }

    Convertion(number) {
        if(number === 1) {
            this.chiffreRomain = "I"
        }
    }

    GetChiffreRomain() {
        return this.chiffreRomain
    }
}
