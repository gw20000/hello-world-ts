"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftNumber = exports.PlayerNumber = exports.Mark = exports.Color = exports.Joker = void 0;
var Joker;
(function (Joker) {
    Joker["big"] = "JOKER";
    Joker["little"] = "joker";
})(Joker = exports.Joker || (exports.Joker = {}));
var Color;
(function (Color) {
    Color["spade"] = "\u2660\uFE0F";
    Color["club"] = "\u2663\uFE0F";
    Color["heart"] = "\u2665\uFE0F";
    Color["diamond"] = "\u2666\uFE0F";
})(Color = exports.Color || (exports.Color = {}));
var Mark;
(function (Mark) {
    Mark["one"] = "1";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["jack"] = "J";
    Mark["queen"] = "Q";
    Mark["king"] = "K";
})(Mark = exports.Mark || (exports.Mark = {}));
var PlayerNumber;
(function (PlayerNumber) {
    PlayerNumber[PlayerNumber["two"] = 2] = "two";
    PlayerNumber[PlayerNumber["three"] = 3] = "three";
    PlayerNumber[PlayerNumber["four"] = 4] = "four";
})(PlayerNumber = exports.PlayerNumber || (exports.PlayerNumber = {}));
var LeftNumber;
(function (LeftNumber) {
    LeftNumber[LeftNumber["zero"] = 0] = "zero";
    LeftNumber[LeftNumber["two"] = 2] = "two";
    LeftNumber[LeftNumber["three"] = 3] = "three";
    LeftNumber[LeftNumber["six"] = 6] = "six";
})(LeftNumber = exports.LeftNumber || (exports.LeftNumber = {}));
