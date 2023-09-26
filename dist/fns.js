"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distributeDeck = exports.shuffleDeck = exports.displayDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
function createDeck() {
    const deck = [];
    const colors = Object.values(enums_1.Color);
    const marks = Object.values(enums_1.Mark);
    marks.forEach((mark) => {
        colors.forEach((color) => {
            deck.push({
                color,
                mark,
                getString() {
                    return color + mark;
                }
            });
        });
    });
    let jokerBig = { type: enums_1.Joker.big, getString() { return enums_1.Joker.big; } };
    let jokerLittle = { type: enums_1.Joker.little, getString() { return enums_1.Joker.little; } };
    deck.push(...[
        jokerBig,
        jokerLittle
    ]);
    return deck;
}
exports.createDeck = createDeck;
function displayDeck(deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        result += card.getString() + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
    });
    console.log(result + '\n');
}
exports.displayDeck = displayDeck;
function shuffleDeck(deck) {
    function deepClone(obj) {
        if (typeof obj !== 'object' || obj === null)
            return obj;
        const result = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = deepClone(obj[key]);
            }
        }
        return result;
    }
    deck = deepClone(deck);
    let newDeck = [];
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    while (deck.length) {
        const i = getRandom(0, deck.length - 1);
        newDeck.push(deck[i]);
        deck.splice(deck.indexOf(deck[i]), 1);
    }
    return newDeck;
}
exports.shuffleDeck = shuffleDeck;
function distributeDeck(deck, n, left) {
    const eachNum = (deck.length - left) / n;
    let result = '\n';
    if (eachNum % 1 === 0) {
        deck.forEach((card, i) => {
            result += card.getString() + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
            if ((i + 1) % eachNum === 0 && (i + 1) !== deck.length) {
                result += '\n\n\n';
            }
        });
    }
    else
        throw new Error('the value of n  is not allowed');
    console.log(result + '\n');
}
exports.distributeDeck = distributeDeck;
