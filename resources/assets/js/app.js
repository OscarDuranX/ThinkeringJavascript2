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



 **/

// "use strict";
//
// console.log(this);

    var showFullName =  function () {
    console.log(this.firstName + ' ' + this.sn1)
}

var person = {

    firstName : "Penelope",
    sn1  : "Tur",
    fullname: showFullName
};

person.fullname();
