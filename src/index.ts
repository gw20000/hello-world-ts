// let me: string = '123dfs4'
// console.log(me)
// if (false) {
//     me = '234'
// }
// let you = "jifjeifj"
// let abc = 1

// demo : deck 

type Deck = Card[]
type Card = {
    color: Color
    mark: number
}
type Color = '♥️' | '♠️' | '♣️' | '♦️'




function createDeck(): Deck {
    const deck: Deck = []
    for (let i = 0; i < 13; i++) {
        let mark = i + 1
        for (let j = 0; j < 4; j++) {
            let color: Color
            if (j == 0) {
                color = '♠️'
            }
            else if (j == 1) {
                color = '♣️'
            }
            else if (j == 2) {
                color = '♥️'
            }
            else {
                color = '♦️'
            }

            deck.push({ color, mark })

        }


    }

    return deck
}

function displayDeck(deck: Deck) {
    let result = '\n'
    deck.forEach((card, i) => {
        let mark = ''
        if (card.mark === 11) {
            mark = 'J'
        }
        else if (card.mark === 12) {
            mark = 'Q'
        }
        else if (card.mark === 13) {
            mark = 'K'
        } else {
            mark += card.mark
        }

        if ((i + 1) % 8 == 0) {

            result += card.color + mark + '\n'
        }

        else if ((i + 1) % 4 == 0) {
            result += card.color + mark + ' ' + '\t'
        }

        else {
            result += card.color + mark + ' '
        }
    })
    result += '\n'
    console.log(result)
}

const deck = createDeck()
displayDeck(deck)