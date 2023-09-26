// let me: string = '123dfs4'
// console.log(me)
// if (false) {
//     me = '234'
// }
// let you = "jifjeifj"
// let abc = 1






// demo1 : deck 

// type Deck = Card[]
// type Card = {
//     color: Color
//     mark: number
// }
// type Color = '♥️' | '♠️' | '♣️' | '♦️'


// function createDeck(): Deck {
//     const deck: Deck = []
//     for (let i = 0; i < 13; i++) {
//         let mark = i + 1
//         for (let j = 0; j < 4; j++) {
//             let color: Color
//             if (j == 0) {
//                 color = '♠️'
//             }
//             else if (j == 1) {
//                 color = '♣️'
//             }
//             else if (j == 2) {
//                 color = '♥️'
//             }
//             else {
//                 color = '♦️'
//             }

//             deck.push({ color, mark })

//         }


//     }

//     return deck
// }

// function displayDeck(deck: Deck) {
//     let result = '\n'
//     deck.forEach((card, i) => {
//         let mark = ''
//         if (card.mark === 11) {
//             mark = 'J'
//         }
//         else if (card.mark === 12) {
//             mark = 'Q'
//         }
//         else if (card.mark === 13) {
//             mark = 'K'
//         } else {
//             mark += card.mark
//         }

//         if ((i + 1) % 8 == 0) {

//             result += card.color + mark + '\n'
//         }

//         else if ((i + 1) % 4 == 0) {
//             result += card.color + mark + ' ' + '\t'
//         }

//         else {
//             result += card.color + mark + ' '
//         }
//     })
//     result += '\n'
//     console.log(result)
// }

// const deck = createDeck()
// displayDeck(deck)





// demo2:  number enum 
// enum Level {

//     level1 = 1,
//     level2,
//     level3

// }


// let level: Level

// level = Level.level1

// level = Level.level2

// Object.keys(Level).forEach((key, i, arr) => {
//     if (i > arr.length / 2 - 1) {
//         console.log(key)
//     }
// })



// Object.values(Level).forEach((value) => {
//     if (typeof value === 'number') {
//         console.log(value)
//     }

// })



//demo3: deck-improved :  using  enum type to refactor  demo1--- deck 




//TS can use  two different modularization standards mixed up ; for example, we can't control a 3rd party module using what modularization standard. 

// import fs from 'fs'
// const filePath = './index.js'

// console.log(filePath)

// const fileContent = fs.readFileSync(filePath)

// console.log(fileContent)




// demo4: TS code supports modularization  : best practic :  use ES Modules for unity in TS code 







// demo5: using  ES modules  to refactor demo3  :  write TS modularization code, using ES Modules 


import { createDeck, shuffleDeck, displayDeck, distributeDeck } from "./fns"
import { PlayerNumber, LeftNumber } from "./enums"

let deck = createDeck()
deck = shuffleDeck(deck)
displayDeck(deck)
distributeDeck(deck, PlayerNumber.two, LeftNumber.two | LeftNumber.two)




//demo6:  interface conception ;   how to use interface 



// interface constraining an  object , a mothod 

interface User {
    name: string,
    age: number,
    sayHello(): void,   //  constraint a  method :  it’s a method, no param ,  no return value  //    also    sayHello: ()=>void
    sayHello: () => void
}

type User2 = {
    name: string,
    age: number,
    sayHello(): void,   //  constraint a  method :  it’s a method, no param ,  no return value  //    also    sayHello: ()=>void
    sayHello: () => void
}


let user: User = {
    name: "Tom",
    age: 18,
    sayHello() {
        console.log("hello")
    }
}

let user2: User2 = {
    name: "Tom",
    age: 18,
    sayHello() {
        console.log("hello")
    }
}



// interface constraining a fn 

// type Condition = (n: number)=> boolean

// type Condition = {
//     (n: number): boolean
// }


interface Condition {
    (n: number): boolean
}

function sum(numbers: number[], callBack: Condition) {
    let result: number = 0
    numbers.forEach((n) => {
        if (callBack(n)) {
            result += n
        }
    })
    return result
}


const result = sum([1, 2, 3, 4, 5], n => n % 2 !== 0)

console.log(result)




// demo7:modifier : modifier is designed to add on info, for example, to a type or a property of a class;    for example , "readonly" 
//note:  modider  will not enter into  compiled result 
// note: TS only work before runtime  ;   enum will enter into compiled result . So, i would say, TS in most cases work only before runtime. 


// type UserInfo = {
//     id: string
//     name: string,
//     age: number,
//    readonly  arr: readonly number[]
// }


interface UserInfo {
    id: string
    name: string,
    age: number,
    readonly arr: readonly number[]


}

let userinfo: UserInfo = {
    id: 'jife',
    name: 'Rainey',
    age: 13,
    arr: [12, 34, 3]
}

// userinfo.arr = [1, 2]
// userinfo.arr.pop()


const arr: readonly number[] = [1, 4, 6]

// arr = [23,45,9]

// arr[0]=100



//demo8: type compatibility  

//    one way :  using  non-literal value to assign to a specific type of variable 

//  two way:   using  type assering ,  telling  TS specifically and forcedly the value acutally  conforms to the type required by the constraint   because you know  it is or could be a vlaue of that type 


interface Duck {
    sound: "嘎嘎嘎"
    swim(): void

}


// let person = {
//     name: "a person disguised as a duck",
//     ride() { },
//     sound: "嘎嘎嘎" as "嘎嘎嘎",    // type asserting 
//     swim() {
//         `${this.name}  could release sound ${this.sound}`
//     }
// }


//  person = {
//     name: "a person disguised as a duck",
//     ride() { },
//     sound: "嘎嘎嘎",   // here has  type inferring 
//     swim() {
//         `${this.name}  could release sound ${this.sound}`
//     }
// }

// const duck: Duck = person   // using  non-literal value  to assign to a variable of specific type ,  to  implement type compatibility  



let person = {
    name: "a person disguised as a duck",
    ride() { },
    sound: "嘎嘎嘎",
    swim() {
        `${this.name}  could release sound ${this.sound}`
    }
}


let duck: Duck = person as Duck    // using type asserting , to impletemtent type compatibility 


duck = {
    name: "a person disguised as a duck",
    ride() { },
    sound: "嘎嘎嘎",
    swim() {
        console.log(`${this.name}  could release sound ${this.sound}`)
    }
} as Duck // using type asserting  , to impletemtent type compatibility 

console.log(duck.sound)
duck.swim()


duck = {

} as Duck

// console.log(duck.sound)
// duck.swim()

duck = 1 as unknown as Duck




//demo9: refactor poker through  interface   and  type compatibility 


// demo10:  increased   class syntax  by  TS  
let base: number = 0

class BlogUser {

    // readonly id = this.getBaseInc() // userid 
    readonly id: string
    private allowNum: number = 3 // daily top limit of number of your post articles 
    private curNum: number = 0 // daily cur number of your post articles

    constructor() {
        this.id = this.getBaseInc()
    }

    pubish(title: string) {
        if (this.curNum < this.allowNum) {
            console.log('user---' + this.id + ' have posted an article---' + 'article title :' + title)
            this.curNum++
        } else {

            console.log('today the number of your posted article  is up to the top limit ')
        }

    }

    private getBaseInc() {
        let id = base + 1 + ''
        let idLen = (id + '').length
        if (idLen < 3) {
            switch (idLen) {
                case 1: {
                    id = '00' + id
                    break
                }
                case 2: {
                    id = '0' + id

                }
            }
        }
        base++
        return id
    }

}

const user3 = new BlogUser()

user3.pubish('article 1')
user3.pubish('article 2')
user3.pubish('article 3')
user3.pubish('article 4')
user3.pubish('article 5')


//demo10: accessor properties 

// accessor properties is not a new thing as it's supported by ES2016+ 

//accessor properties  definition :    accessor property is designed to take control of  reading and  writing of a property 

// an accessor property , in essence ,  is 2 regular fns  ;  set xxx  and  get xxx  are  just  sugar syntax  

class Person {

    constructor(public name: string, private _age: number) {
        this.age = this._age
    }

    get age() {
        return Math.floor(this._age)
    }
    set age(value: number) {
        if (value < 0) {
            this._age = 0
        }
        else if (value > 200) {
            this._age = 200
        }
        else {
            this._age = Math.floor(value)
        }
    }

}


const person1 = new Person('Tom', 20.5)

console.log(person1.age)


//  note :   dead cycle  don't have to lead to RAM leak  , but  endless recursive calling  is bound to lead to RAM leak.





