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
                mark
            });
        });
    });
    deck.push(...[enums_1.Joker.bigJoker, enums_1.Joker.littleJoker]);
    return deck;
}
exports.createDeck = createDeck;
function displayDeck(deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        if (card === enums_1.Joker.bigJoker) {
            return result += enums_1.Joker.bigJoker + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
        }
        if (card === enums_1.Joker.littleJoker) {
            return result += enums_1.Joker.littleJoker + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
        }
        result += card.color + card.mark + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
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
            if ((i + 1) % eachNum === 0 && (i + 1) !== deck.length) {
                if (card === enums_1.Joker.bigJoker) {
                    return result += enums_1.Joker.bigJoker + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}` + '\n\n\n';
                }
                if (card === enums_1.Joker.littleJoker) {
                    return result += enums_1.Joker.littleJoker + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}` + '\n\n\n';
                }
                result += card.color + card.mark + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}` + '\n\n\n';
            }
            else {
                if (card === enums_1.Joker.bigJoker) {
                    return result += enums_1.Joker.bigJoker + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
                }
                if (card === enums_1.Joker.littleJoker) {
                    return result += enums_1.Joker.littleJoker + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
                }
                result += card.color + card.mark + ' ' + `${(i + 1) % 4 === 0 ? '\t' : ''}` + `${(i + 1) % 8 === 0 ? '\n' : ''}`;
            }
        });
    }
    else
        throw new Error('the value of n  is not allowed');
    console.log(result + '\n');
}
exports.distributeDeck = distributeDeck;
