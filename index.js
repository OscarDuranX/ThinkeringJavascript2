// OOP : Object Oriented Programming



// Object Literal Notation
var person = {
    name : 'Sergi',

    constructor: function () {

    },

    hello: function () {
        console.log("Hola " + this.name);
    },
    bye: function () {
        console.log("Adeww " + this.name);
    },
}

console.log(person.name);
person.hello();
person.bye();
