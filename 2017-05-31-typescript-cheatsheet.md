---
layout: default
title: Typescript cheatsheet
---


# Typescript Cheatsheet

Compile typescript file to ECMAScript 5 or pre-JS2015
```
tsc <filename>.ts --target ES5
```

Watch all typescript files for changes:
When it runs, it's going to compile all those typescript files into ES5 files.
```
tsc *.ts --watch --target ES5
```

### strict mode
```typescript
"using strict";
```
Variable declarations (i.e. `var x;`) are valid for the entire scope they are written in, even if you declare after you assign.
This is what is meant by `"hoisting"`: 
> The `var x;` is hoisted to the beginning of the scope, and the assignment 
`x = 6;` is fine because `x` has been declared somewhere in that scope.

**`Strict mode` does not change any of this**. 

It would throw an error if you omitted the `var x;` declaration altogether.

**Without strict mode, the variable's scope would implicitly be the global 
scope.**

If you currently have foo = "bar" without defining foo first, your code will 
start failing.

### `let`, `const` and `var`:
`let` declares in block scope. Valid only within a scope.

`const` defines constants. It is block scoped as well.

`var` declares with global scope. When used can modify global variables from 
any scope.

```typescript
let x = 5;

function printMe() {
    console.log(x); // TS will scream
                    // Block-scoped variable 'x' used before its declaration.
                    
                    // The scream is because of the let x declaration
                    // on the line below.
                    // if that is removed, x will be `5` from the scope above
                    // the function, i.e global x in this case. 
                     
    let x = 7;
}

console.log(x); // output: 5
                
                // since the value of x in the scope being
                // considered is 5

printMe();  // output: undefined

            // because `x`, variable gets hoisted
            // during execution.
            
            // inside function printMe():
            // let x;
            // console.log(x);
            // x = 7;
            // the declaration of x is hoisted but not the definition of x.


var x = 8;

function printMe() {
    console.log(x); // TS will not scream
                    // since var is used inside the function body block.
    var x = 7;
}

console.log(x); // output: 8

printMe();  // output: undefined
            // same case as above
            
            
// difference between let and var becomes apparent here
let x = 8;

if (x > 0) {
    
    let x = 4;
    console.log(x); // output: 4
                    // let declares block scoped variables
}

console.log(x); // output: 8

var y = 9;

if (y > 0) {
    
    var y = 10;
    console.log("inside y = " + y); // output: inside y = 10
}

console.log("outside y = " +y); // output: outside y = 10

// the difference is apparent
// var is modifying the global variable
// but let is only giving blockscoped  context
```

### Datatypes, identifier names etc:

* Can begin with an alphabet`[a-zA-Z]`, `$` or `_` followed by `[a-zA-Z0-9$_]`.
* The types are optional in typescript.
* Can use ```typeof(identifier)``` to find the type of the identifier/variable.
```typescript
let $dollar123 = "";
let myName:string = "Sidmishraw";
let myAge: number = 24;
let canVote: boolean = true;
let anything: any = "bulbasaur";
let pokemon = "charmander";

anything = 12; // won't throw an error, since it is of any type
myAge = "twenty four"; // this will throw an error from the TS compiler.
```

#### Type conversions:

```typescript
// converting from an integer string representation
let str2int: number = parseInt("5");

// converting from a floating point string representation
let str2float: number = parseFloat("5.66");

// getting string value
// calling the `toString()` on the number TS object
console.log(str2float.toString())
```

> Note: The `toString()` will convert any datatype to a `string`.

#### Constants
Using the `const` keyword, can declare constants. Same as `ES6`.
The values cannot be changed anymore like constants.
```typescript
const PI = 3.1416;
const __PIKA__ = "Pikachu";
const __BULBA__ = "Bulbasaur";
```

### Interfaces (as complex types)
Used to create complex datatypes:
```typescript
interface Pokemon {
    id: number;
    name: string;
    combatPower: number;
};

// Pokemon became a complex data type
// that needs to have the fields defined.
// Now, bulbasaur is a Pokemon so it needs to have all those
// three properties.

// BTW, any object having those three properties
// will qualify as a Pokemon.

// interfaces are similar to interfaces of golang
// they needn't be implemented explicitly, if an object
// satisfies their structure, it can be used wherever the interface is used.
let bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  combatPower: 500
};

let charmander = {
    id: 4,
    name: "Charmander",
    combatPower: 512,
    weight: 12
};

function isPokemon(p: Pokemon) {
    console.log(`Yup, this guy is a pokemon and it's name is ${p.name}`);
}

isPokemon(bulbasaur); // output: Yup, this guy is a pokemon and it's name is Bulbasaur


isPokemon(charmander); // output: Yup, this guy is a pokemon and it's name is Charmander
```

#### Arrays:
Syntax is: 
```
<let/var> <identifier>: <datatype>[] = <array>;
```
* All features are same as in JS.

For eg:
```typescript
let pokemons: string[] = ["bulbasaur", "charmander", "squirtle", "pikachu"];

pokemons.push(5); // will give an error
pokemons.push("aerodactyl");

let pokemons: Pokemon[] = [];
pokemons.push({
                id: 1,
                name: "Bulbasaur",
                combatPower: 500
              });

// Arrays still have the subscript
// notation to access the elements by index
console.log(pokemons[0].toString()); // will print [Object object]
console.log(JSON.stringify(pokemons[0])); // will print:
// {"id": 1, "name": "Bulbasaur", "combatPower": 500}

// tuples
let tuple: [string, number] = ["hey", 1];

console.log(tuple[0]); // output: hey
console.log(tuple[1]); // output: 1
console.log(tuple[3]); // undefined

tuple = [2, "string1"]; // TS will scream, order is important
```

#### Maths:
Javascript math is still valid in TS.

> Note: `eval()` evaluates the string expression within it and returns the 
result.

```typescript
eval("5 + 4"); // = 9
eval("5 - 4"); // = 1
eval("5 * 4"); // = 20
eval("5 / 4"); // = 1.25
eval("5 % 4"); // = 1
eval("5 + \"four\""); // = 5four
```

* ++ and -- behave the same as in JS, Java, C, C++ etc (post and pre styles).


#### Conditionals and Loops:

`if`, `switch` and `for` behave the same as in JS.

```typescript
let x: number = 2;
if(x % 2 === 0) {
    console.log("even");
} else {
    
}

let randArray = [5,6,7,8];

// old for-in loop also called for each in java/c++11
// prints the indices of the array
// val = 0, 1, 2 ,3
for (let val in randArray) {
    console.log(val);
}

let strArray = randArray.map(String);
// same as
// let strArray = randArray.map((x)=>x.toString());

// for - of loop new in TS/ES6
// prints the values of the array
// instead of the indices
// val = "5", "6", "7", "8"
for (let val of strArray) {
    console.log(val);
}
```

#### Functions:
Same style as normal JS with some additional syntax:
```typescript
function getSum(num1:number, num2:number): number {
    return num1 + num2;
}

// void return type can be left out
function printMe():void {
    console.log("Print")
}

let sum: number = getSum(5, 6);
let sum2 = getSum(10, 12);
let sum3 = getSum(10, "pika"); // TS screams here

// num2 has default value
// num3 has a `?` after it
// this syntax is used for cases when it is not clear
// if num3 will be having a value
let getDiff = function(num1:number, num2=0, num3?: number):number {
    if (typeof (num3) !== "undefined") {
        return num1-num2-num3;
    } else {
        return num1-num2;
    }
};

// varargs
// treats the variable args as an array
// same as in case of ES6/7
let sumAll = function(...nums: number[]):number {

    return nums.reduce((acc, x)=>acc + x, 0); 
};

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));


// lambdas or arrow functions
// same as ES6/7
var addOne = (x:number) => x + 1;
```


### Class:
```typescript
class Animal {
    
    // public attribute
    public favFood: string;
    
    // careful with naming of private variables
    // and their getters/setters
    private _me: string;
    
    private static numOfAnimals: number = 0;
    
    // can use the private/public 
    constructor(private name:string, private owner:string, me:string) {
        
        Animal.numOfAnimals ++;
        this._me = me;
    }
    
    ownerInfo() {
        console.log(this._me);
    }
    
    static howMany():number {
        return Animal.numOfAnimals;
    }
    
    // getter
    get me():string {
        
        return this._me;
    }
    
    // setter
    set me(me:string) {
        this._me = me;
    } 
}

let spot = new Animal("Spot", "Me", "Dog");

spot.ownerInfo();

Animal.howMany();

spot.me = "hey";

// Inheritance
class Dog extends Animal {
    
    constructor(name:string, owner:string) {
        super(name, owner, "Dog");
    }
}

// check inheritance
let d = new Dog("Gr", "Me");

console.log(d instanceof Dog);      // true
console.log(d instanceof Animal);   // true

// checking for fields
console.log("name" in d);           // true
                                    // doesn't matter if the variable is 
                                    // private or public
```

### Interfaces in inheritance
Interfaces act as contracts that need to implements by the classes.

```typescript
interface Vehicle {
    move():void;
}

class Car implements Vehicle {
    move():void {
        
    }
}

class Bike implements Vehicle {
    move():void {
        
    }
}
```


### Generics:
Similiar to generics in Java, C++ and C#

```typescript
 // ---------- GENERIC FUNCTIONS ----------
 // We use generic functions when we want
 // to be able to work with multiple data
 // types in similar ways
  
 // To create a generic function we place
 // 1 or more data type markers in angled
 // brackets after the function name. We
 // then use those data type markers
 // instead of actual data types.
  
 function GetType<T>(val: T): string{
   return typeof(val);
 }
  
 let aStr = "A String";
 let aNum = 10;
  
 document.write(GetType(aStr) + "<br />");
 document.write(GetType(aNum) + "<br />");
  
 // You define a generic function that
 // excepts any class that implements
 // an interface
  
 function GetWheels<w extends Vehicle>(veh: w): number
 {
   return veh.drive();
 }
  
 GetWheels(car);
 GetWheels(bike);
  
 // You can also define generic classes that
 // can work with multiple data types
  
 class GenericNumber<T>{
  
   // An arrow function as described above
   add: (val1: T, val2: T) => T;
 }
  
 let aNumber = new GenericNumber<number>();
  
 // Define how we want add to work with numbers
 aNumber.add = function(x, y){return x + y;};
  
 document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
  
 let aStrNum = new GenericNumber<string>();
  
 // Define how we want add to work with strings
 aStrNum.add = function(x, y){return String(Number(x) + Number(y));};
  
 document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
```

##### Sources:
* [Derek Banas - Typescript in one video script](http://www.newthinktank.com/2016/09/typescript-video-tutorial/)
* [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
