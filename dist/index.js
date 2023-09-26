"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fns_1 = require("./fns");
const enums_1 = require("./enums");
let deck = (0, fns_1.createDeck)();
deck = (0, fns_1.shuffleDeck)(deck);
(0, fns_1.displayDeck)(deck);
(0, fns_1.distributeDeck)(deck, enums_1.PlayerNumber.two, enums_1.LeftNumber.two | enums_1.LeftNumber.two);
let user = {
    name: "Tom",
    age: 18,
    sayHello() {
        console.log("hello");
    }
};
let user2 = {
    name: "Tom",
    age: 18,
    sayHello() {
        console.log("hello");
    }
};
function sum(numbers, callBack) {
    let result = 0;
    numbers.forEach((n) => {
        if (callBack(n)) {
            result += n;
        }
    });
    return result;
}
const result = sum([1, 2, 3, 4, 5], n => n % 2 !== 0);
console.log(result);
let userinfo = {
    id: 'jife',
    name: 'Rainey',
    age: 13,
    arr: [12, 34, 3]
};
const arr = [1, 4, 6];
let person = {
    name: "a person disguised as a duck",
    ride() { },
    sound: "嘎嘎嘎",
    swim() {
        `${this.name}  could release sound ${this.sound}`;
    }
};
let duck = person;
duck = {
    name: "a person disguised as a duck",
    ride() { },
    sound: "嘎嘎嘎",
    swim() {
        console.log(`${this.name}  could release sound ${this.sound}`);
    }
};
console.log(duck.sound);
duck.swim();
duck = {};
duck = 1;
let base = 0;
class BlogUser {
    constructor() {
        this.allowNum = 3;
        this.curNum = 0;
        this.id = this.getBaseInc();
    }
    pubish(title) {
        if (this.curNum < this.allowNum) {
            console.log('user---' + this.id + ' have posted an article---' + 'article title :' + title);
            this.curNum++;
        }
        else {
            console.log('today the number of your posted article  is up to the top limit ');
        }
    }
    getBaseInc() {
        let id = base + 1 + '';
        let idLen = (id + '').length;
        if (idLen < 3) {
            switch (idLen) {
                case 1: {
                    id = '00' + id;
                    break;
                }
                case 2: {
                    id = '0' + id;
                }
            }
        }
        base++;
        return id;
    }
}
const user3 = new BlogUser();
user3.pubish('article 1');
user3.pubish('article 2');
user3.pubish('article 3');
user3.pubish('article 4');
user3.pubish('article 5');
class Person {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.age = this._age;
    }
    get age() {
        return Math.floor(this._age);
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        }
        else if (value > 200) {
            this._age = 200;
        }
        else {
            this._age = Math.floor(value);
        }
    }
}
const person1 = new Person('Tom', 20.5);
console.log(person1.age);
