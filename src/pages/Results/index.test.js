import { formatJobList, formatQueryParams } from './'
 
describe('La fonction formatJobList', () => {
    test('ajoute une virgule à un item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('La fonction formatQueryParams', () => {
    test('retourne une chaine de query params', () => {
        const answers = {
            1: 'answer1',
            2: 'answer2',
        }
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams(answers)).toEqual(expectedState)
    })
    test('retourne une chaine de query params vide', () => {
        const answers = {}
        const expectedState = ''
        expect(formatQueryParams(answers)).toEqual(expectedState)
    })
})