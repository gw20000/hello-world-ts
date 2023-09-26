"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fns_1 = require("./fns");
const enums_1 = require("./enums");
let deck = (0, fns_1.createDeck)();
deck = (0, fns_1.shuffleDeck)(deck);
(0, fns_1.displayDeck)(deck);
(0, fns_1.distributeDeck)(deck, enums_1.PlayerNumber.two, enums_1.LeftNumber.two | enums_1.LeftNumber.two);
