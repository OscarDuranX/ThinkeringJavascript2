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

// The module pattern
var personn = (function {
    var name = "Sergi";
    var sn1 = "Duran";
    var sn2 = "retolor";

    return{
        hello: function () {
            console.log("Hola " + name);
        },
        bye: function () {
            console.log("Adeww " + name);
        },
    }
})();

personn.bye();



