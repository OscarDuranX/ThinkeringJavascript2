/**
 * this no semrpe és el mateix depèn del context, es diferent al PHP
 *
 * this semrpe fa una referencia a un objecte
 * this

 class Person{
    $this
}

 ex:
 console.log(this);

 Apareix el objecte window que es el per defecte. this es el objecte on invoca la funcio on s'esta utilitzan.

 ex 2:

 "use strict";

 console.log(this);



 https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind

 **/

// "use strict";
//
// console.log(this);
//
// var showFullName =  function (sn2) {
//     console.log(this.firstName + ' ' + this.sn1 + " " + arguments[0])
// }
//
// var name = "oscar";
//
// var person = {
//
//     firstName : name,
//     sn1  : "Tur",
//     fullname: showFullName
// };
//
// person.fullname();
//
// showFullName();
//
// var copiaShowFullName = showFullName.bind(person);
//
// copiaShowFullName();
//
// showFullName.call(person,'Badenaass');
// showFullName.apply(person,['Badenaass']);


var Persona = function (name) {
    this.name = name;
    console.log("Creant un objecte");
}

var personeta = new Persona();

console.log(personeta.name);

