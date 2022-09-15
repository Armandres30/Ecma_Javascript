//declaring
class User {};
//
//const newUser = new User();

class user {
    //methods
    greeting(){
        return "Hello";
    }
}

const gndx = new user();
console.log(gndxx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

class user {
    //Constructor
    constructor(){
        console.log("New User");
    }
    greeting(){
        return "Hello";
    }
}

const david = new user();

// this

class user {
    constructor() {
        this.name = name;
    }
    //methods
    speak() {
        return "Hello";
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Ana");
console.log(ana.greeting());

//setters and getters

class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new URLSearchParams("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper.uAge = 20);