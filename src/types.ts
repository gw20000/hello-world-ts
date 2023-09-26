import { Color, Mark, Joker } from "./enums"

export type Deck = Card[]

export type Card = {
    color: Color,
    mark: Mark
} | Joker
