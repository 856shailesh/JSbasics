import { Animal } from "./animal.js";
class dog extends Animal {
    constructor() {
        super()
        console.log("Child Const")
    }
    walk() {
        console.log("Dog is walking")
    }
}

const tom = new dog();
//const lion = new Animal();
//lion.walk(); // call the parent walk
tom.walk(); // call the child walk.