import { Color, Mark, Joker, PlayerNumber, LeftNumber } from "./enums"
import { Card, Deck, JokerCard } from "./types"

export function createDeck(): Deck {
    const deck: Deck = []
    const colors = Object.values(Color)
    const marks = Object.values(Mark)
    marks.forEach((mark) => {
        colors.forEach((color) => {
            deck.push({
                color,
                mark,
                getString() {
                    return color + mark
                    // return this.color + this.mark
                }
            } as Card)   //using type asserting to assign to a value of specific type , to  implement  type compatibility 
        })
    })
    //using non-literal value to assign to a value of specific type , to  implement  type compatibility 
    let jokerBig: JokerCard = { type: Joker.big, getString() { return Joker.big } }
    let jokerLittle: JokerCard = { type: Joker.little, getString() { return Joker.little } }
    deck.push(...[
        jokerBig,
        jokerLittle
    ])
    return deck
}

export function displayDeck(deck: Deck) {
    let result = '\n'
    deck.forEach((card, i) => {
        result += card.getString() + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`
    })
    console.log(result + '\n')
}

export function shuffleDeck(deck: Deck) {

    function deepClone(obj: any) {
        if (typeof obj !== 'object' || obj === null) return obj
        const result = Array.isArray(obj) ? [] : {}
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = deepClone(obj[key])
            }
        }
        return result
    }
    deck = deepClone(deck)

    let newDeck: Deck = []

    function getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    while (deck.length) {
        const i = getRandom(0, deck.length - 1)
        newDeck.push(deck[i])
        deck.splice(deck.indexOf(deck[i]), 1)
    }
    return newDeck
    // deck.sort(() => Math.random() - 0.5)

    // let i = 0
    // let j = deck.length - 1
    // while (i < j) {
    //     if (Math.random() > 0.5) {
    //         const temp = deck[i]
    //         deck[i] = deck[j]
    //         deck[j] = temp
    //     }
    //     i++
    //     j--
    // }
}


export function distributeDeck(deck: Deck, n: PlayerNumber, left: LeftNumber): void | never {
    const eachNum = (deck.length - left) / n
    let result = '\n'
    if (eachNum % 1 === 0) {
        deck.forEach((card, i) => {

            result += card.getString() + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`

            if ((i + 1) % eachNum === 0 && (i + 1) !== deck.length) {

                result += '\n\n\n'
            }

        })

    }
    else throw new Error('the value of n  is not allowed')

    console.log(result + '\n')
}
