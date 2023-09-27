import { Color, Joker, Mark } from "./enums"

// export type Deck = Card[]

export interface Card {
    getString(): string
}
export interface NormalCard extends Card {
    color: Color,
    mark: Mark
}

export interface JokerCard extends Card {
    type: Joker
}

