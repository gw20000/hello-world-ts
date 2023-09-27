import { Color, Mark, Joker, PlayerNumber, LeftNumber, DeckNum } from "./enums";
import { Card, JokerCard } from "./types";

type DistributingResult = Deck[]

export class Deck {
    private deckN: DeckNum = DeckNum.one
    private cards: Card[] = []

    constructor(
        deckN?: DeckNum,
        cards?: Card[]
    ) {
        if (deckN) {
            this.deckN = deckN
        }
        if (cards) {
            this.cards = cards
        } else {
            this.init()
        }
    }
    private init() {
        this.create()
        if (this.deckN === DeckNum.two) {
            this.create()
        }
    }
    private create() {
        const colors = Object.values(Color)
        const marks = Object.values(Mark)
        marks.forEach((mark) => {
            colors.forEach((color) => {
                this.cards.push({
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

        this.cards.push(...[
            jokerBig,
            jokerLittle
        ])
    }
    print() {
        let result = '\n'
        this.cards.forEach((card, i) => {
            result += card.getString() + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`
        })
        console.log(result + '\n')
    }
    shuffe() {
        this.cards.forEach((card, i) => {
            const temp = card
            const targetIndex = this.getRandom(0, this.cards.length - 1)
            this.cards[i] = this.cards[targetIndex]
            this.cards[targetIndex] = temp
        })
    }
    distribute(playerNum: PlayerNumber, left: LeftNumber): DistributingResult | never {
        let result: DistributingResult = []
        let curIndex = 0 // player index 
        // if value of  left is allowed 
        if ((this.cards.length - left) % playerNum === 0) {
            const n = (this.cards.length - left) / playerNum   // each player should have how many cards  except for left cards on desk 
            console.log('the number of cards each player has-----:', n)
            console.log('\n')
            // distribute cards for each player  
            for (let i = 0; i < this.cards.length; i++) {
                if ((i + 1) % n === 0) {
                    result[curIndex] = new Deck(this.deckN, this.cards.slice(i + 1 - n, i + 1))
                    curIndex++
                }
            }
            //distribute cards for desk 
            const leftDeck = new Deck(this.deckN, this.cards.slice(this.cards.length - left, this.cards.length))
            result[curIndex] = leftDeck

        } else {
            // if cards 
            throw new Error('the value of param left is now allowed when param playerNum is assigned with ' + playerNum)
        }

        return result
    }

    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

}