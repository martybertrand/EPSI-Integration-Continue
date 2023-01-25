import ChiffreRomain from "../src/ChiffreRomain";

describe('Conversion des chiffres arabe en chiffres romains', () => {
    test('Convertir chiffre 1', () => {
        //ETANT DONNE le chiffre 1
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 1

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient I
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("I")
    })
})