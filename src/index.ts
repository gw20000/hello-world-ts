// let me: string = '123dfs4'
// console.log(me)
// if (false) {
//     me = '234'
// }
// let you = "jifjeifj"
// let abc = 1

import { Deck } from "./deck"
import { DeckNum, PlayerNumber, LeftNumber } from "./enums"







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


// import { createDeck, shuffleDeck, displayDeck, distributeDeck } from "./fns"
// import { PlayerNumber, LeftNumber } from "./enums"

// let deck = createDeck()
// deck = shuffleDeck(deck)
// displayDeck(deck)
// distributeDeck(deck, PlayerNumber.two, LeftNumber.two | LeftNumber.two)




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




//🔥demo9: refactor poker through  interface   and  type compatibility 


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


const deck1 = new Deck(DeckNum.two)
deck1.print()
deck1.shuffe()
console.log('======after shuffled:======')
deck1.print()
const distributeResult = deck1.distribute(PlayerNumber.four, LeftNumber.eight)
console.log('======after distributed:======\n')
distributeResult.forEach((deck, i, decks) => {
    if (i === decks.length - 1) {
        console.log('=======desk========')
        deck.print()
        return
    }
    console.log('=======player' + i + '========')
    deck.print()
})

//🔥demo:10: generic type  : 
// background:    if you purly  use  type  constraints ,at some point, u r doomed to lose some type related  info , for exameple,  type consistence , type connection , so in some cases , u  need  generic type  to hold back losing these type related info.   

// defnition: a generic type  is adhering to and is belonging to  a fn,  class, interface or  type alias. 

// functionality :   generic type is designed to give TS more integral and  consistent type check. 

// note:  u can see  generic type as a formal type variable   or symply  a type variable   ; 

// note:  generic type  plays a role of an  unknown  type  when defining  and  then when writing calling , it should be able to be confirmed  in all the  related posiitons in the definition of a fn or class, as well as in interfaces and type aliases used within the fn or class, if u specify the concrete generic type ,or TS successeds in inferring  the concrete generic type. 


const arr2: Array<number> = [1, 2, 45, 3433]  // in fact , this is using  generic type in an interface  ,   so when u specify the concrete generic type of a generic type , it , actually , a concrete type , for example, here is an inteface  :  Array is an interface , and number is a concrete generic type u pass or specify  to the generic type of the interface Array.  so here in essence, u r using an interface to contrain the type of a variable arr2. 




const arr3: number[] = [4, 5, 23]  // functionally same as the concere generic type above 

// how to use generic type in fn  
// : just wirte <generic type name> right after the fn name 
function takeItems<T>(arr: T[], n: number): T[] {

    const result: T[] = []
    if (arr.length <= n) {
        return arr
    }

    for (let i = 0; i < n; i++) {
        result.push(arr.shift() as T)
    }


    return result
}


const items = takeItems([1, 24, 5], 2)
console.log(`==== use generic type in fn=========`)
console.log(items)





//how to use generic type in interface 
interface CallBack<T> {
    (item: T, i: number): boolean
}

// type CallBack<T> = {
//     (item: T, i: number): boolean
// }

// type CallBack<T> = (item: T, i: number) => boolean


function filter<T>(arr: T[], callback: CallBack<T>): T[] {
    const newArr: T[] = []
    arr.forEach((item, i) => {

        if (callback(item, i)) {
            newArr.push(item)
        }

    })
    return newArr
}

console.log(`=======use generic type in interface======`)

const arrO = [1, 4, 5, 8]

console.log(filter(arrO, item => item % 2 !== 0))  // expected to  print out odd number



// how to use generic type in class
// : in the same way as in fn  , just wirte <generic type name> right after the class name 
class ArrayHelper<T>{

    // private arr: T[] = []   // generic type T represents  the type of every item of the array arr 

    // constructor(arr: T[]) {
    //     this.arr = arr
    // }

    //  or 

    constructor(private arr: T[]) {

    }

    takeItems(n: number): T[] {

        const result: T[] = []
        if (this.arr.length <= n) {
            return this.arr
        }

        for (let i = 0; i < n; i++) {
            result.push(this.arr.shift() as T)
        }

        return result
    }

    shuffle() {
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length - 1)
            const temp = this.arr[i]
            this.arr[i] = this.arr[targetIndex]
            this.arr[targetIndex] = temp
        }
    }
    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}


const arrhelper = new ArrayHelper([1, 3, 5, 45]) // TS will infer the concrete generic type 
// const arrhelper = new ArrayHelper<number>([1, 3, 5, 45])  // or specify concrete  generic type 
const subArr = arrhelper.takeItems(2)
console.log(`=======use generic type in class======`)
console.log(subArr)

const subArr2 = arrhelper.takeItems(3)

console.log(subArr2)



const arrhelper2 = new ArrayHelper([11, "33", 55, 66])// TS will infer the concrete generic type 

const subArr3 = arrhelper2.takeItems(2)

console.log(subArr3)




// in conclustion :   through  class's generic type , we can constrain all the perperties and methods (all the related positions) inside the class  that are related to the generic type   


//🔥demo11: generic type constraint 

// definition:   generic type constraint :   constraint of a generic type  :   a type  used to constrain the value scope of a generic type 

interface HasNameProperty {
    name: string
}

//  implement a fn  that  uppercases each word capital of the property name  of certain / some  object 
//  by using  generic type constraint ,   now u have to pass a obj with a name propeerty  rather than  a casual type , according to type compatibility  judgement means for object-----sub structure distinguish type   , because generic type  T has been constraint as a type of  HasNameProperty 
function upperCaseNameProperty<T extends HasNameProperty>(obj: T): T {

    obj.name = obj
        .name.split(' ')
        .filter(item => item)
        .map(s => s[0].toLocaleUpperCase() + s.substring(1))
        .join(' ')

    return obj

}

const obj = {
    name: ' donald trump ',
    age: 19,
    gender: 'male'
}
console.log('========generic type constraint=======')
console.log(upperCaseNameProperty(obj))


// 🔥demo12:  multiple generic types 

//background :  when  defining a fn or class that depends on  more than one type (that is,  multiple unknown types , that is , multiple generic typs  ) , at this moment ,we can use multiple generic types 


function mixArrs<T, K>(arr1: T[], arr2: K[]): (T | K)[] | never {

    if (arr1.length !== arr2.length) {
        throw new Error('length of arr1 is not equivalent to length of arr2')
    }
    let result: (T | K)[] = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i])
        result.push(arr2[i])
    }
    return result
}
console.log('==========multiple generic types=========')
console.log(mixArrs([1, 2, 3], ['1', '2', '3']))




// 🔥demo13:   custom class  Dictionary 
// through a  generic type,  we can keep the consistence of  all the related postions to the generic type in the definition of certain entity (a fn, class, interface,or  type alias)

export class Dictionary<K, V> {
    private arr1: K[] = [] // keys list :  i don't know the concrete type of each key (i don't know the type of the property arr  /  i don't know the type of each item of the property arr ), but i know  the keys' types are unified , so i can use a  generic type ; generic type  K  respresents  the type of every key  //   then when use this class (write calling this class)Dictionary, i pass the concrete type  , for example,  'string'

    private arr2: V[] = [] // values list 

    //  return the value based on / according to  a provided key  , if the key exists , return the responding value , if not , return undefined 
    get(key: K): V | undefined {
        const i = this.arr1.indexOf(key)
        if (i < 0) {
            return
        }
        else return this.arr2[i]
    }

    // to set the value of a key-value pair , but if the key doesn't exist, add the key-value pair 
    set(key: K, val: V) {
        const i = this.arr1.indexOf(key)
        if (i < 0) {
            this.arr1.push(key)
            this.arr2.push(val)
        }
        else {
            this.arr2[i] = val
        }
        return this
    }

    // to  iterate over key-value pairs consisting of arr1 and arr2 :   callback says that iterately give me each key value pair  ,  then i will do some processing with it. 

    // execite a provide fn once per key-value pair in the Map, in insertion order
    forEach(cb: CB<K, V>) {
        this.arr1.forEach((k, i) => {
            const v = this.arr2[i]
            cb(k, v, this)
        });
    }

    // judge if a key exist based a provided key 
    has(key: K) {
        return this.arr1.includes(key)
    }

    //delete a key-pair according to a provided key 
    delete(key: K): boolean {
        let i = this.arr1.indexOf(key)
        if (i === -1) {
            return false
        } else {
            this.arr1.splice(i, 1)
            this.arr2.splice(i, 1)
            return true
        }
    }
    get size() {
        return this.arr1.length
    }
    //clear all key-value pairs 
    clear() {
        this.arr1 = []
        this.arr2 = []
    }
}

const dic = new Dictionary<string, number>()
dic.set('a', 11)
dic.set('a', 111)
dic.set('b', 22)
dic.set('c', 33)
// ever in JS code,  u can't do  type constraints  , but now , in TS code, for example here,   when u r writing calling  method set , u have to pass a string as key in the 1st param position  and a number as value in the 2nd param postioin, while other types r not allowed as editor vscode collaborating with TS code will provide intelligence tooltips to tip you that there's an error abut the type of  the pratical param u pass.

console.log('========dictionary=======')
console.log(dic)

// tips : dubug :  print execution course  ,   forEach is designed  to get every item of an array  and to give it to the callback fn you have passed, so, we need to constrian the callback fn. 


export type CB<U, T> = (key: U, val: T, dic: Dictionary<U, T>) => void  //  it minifests that like TS  says that  i also don't know the concrete types of the two params ( 2 postions : param1, param2) , but when u use me,  u tell me what types they are. 
console.log('=====before delete c=====')
console.log('size--', dic.size)
dic.forEach((k, v) => console.log(k + ': ' + v))

console.log(dic.has('c'))
console.log('c:', dic.get('c'))
console.log('=====after delete c======')
dic.delete('c')
console.log('size--', dic.size)
dic.forEach((k, v) => console.log(k + ': ' + v))
console.log(dic.has('c'))

console.log('c:', dic.get('c'))
// now that u have this class Dictionary, u can use it to contain  key-value pair data 

console.log('====after clear dic======')
dic.clear()

console.log('dic', dic)

interface MyMap<K, V> {
    readonly size: number
    // return the value associated with the specified key , if the key doesn't exist , return undefined 
    get(key: K): V | undefined
    //execute a provided fn noce per key-value pair in the Map, in intertion order
    forEach(callback: (k: K, v: V, map: MyMap<K, V>) => void): void
    // add a new key-value pair, if the key already exists , update the conrrespondnig value 
    set(key: K, value: V): this
    // true  if the key exists and the conrresponding key-value pair  has been romoved ; false if the key doesn't exist 
    delete(key: K): boolean
    // claer 
    clear(): void
    // indicate whether a key-pair exists with a  specified  key   or not 
    has(key: K): boolean

}

let obj3: MyMap<string, number> = new Dictionary<string, number>()

//  class Map2: MyMap<string,number>{

//  }

import path from 'path'

console.log(path.resolve(__dirname, 'test'))