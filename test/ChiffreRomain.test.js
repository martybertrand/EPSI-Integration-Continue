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
    test('Convertir chiffre 9', () => {
        //ETANT DONNE le chiffre 9
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 9

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient IX
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("IX")
    })
    test('Convertir chiffre 10', () => {
        //ETANT DONNE le chiffre 10
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 10

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient X
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("X")
    })
    test('Convertir chiffre 11', () => {
        //ETANT DONNE le chiffre 11
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 11

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient XI
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("XI")
    })
    test('Convertir chiffre 12', () => {
        //ETANT DONNE le chiffre 12
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 12

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient XII
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("XII")
    })
    test('Convertir chiffre 13', () => {
        //ETANT DONNE le chiffre 13
        const convertToChiffreRomain = new ChiffreRomain()
        const chiffreArabe = 13

        //QUAND on le convertit en chiffre romain
        convertToChiffreRomain.Convertion(chiffreArabe)

        //ALORS on obtient XIII
        const chiffreRomain = convertToChiffreRomain.GetChiffreRomain()
        expect(chiffreRomain).toBe("XIII")
    })
})