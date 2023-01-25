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
    test('Convertir chiffre 2', () => {
        //ETANT DONNE le chiffre 2
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 2

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient II
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("II")
    })
    test('Convertir chiffre 3', () => {
        //ETANT DONNE le chiffre 3
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 3

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient III
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("III")
    })
    test('Convertir chiffre 4', () => {
        //ETANT DONNE le chiffre 4
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 4

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient IV
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("IV")
    })
    test('Convertir chiffre 5', () => {
        //ETANT DONNE le chiffre 5
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 5

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient V
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("V")
    })
    test('Convertir chiffre 6', () => {
        //ETANT DONNE le chiffre 6
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 6

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient VI
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("VI")
    })
    test('Convertir chiffre 7', () => {
        //ETANT DONNE le chiffre 7
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 7

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient VII
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("VII")
    })
    test('Convertir chiffre 8', () => {
        //ETANT DONNE le chiffre 8
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 8

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient VIII
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("VIII")
    })  
})