// SCOPE : AMBIT -> ZONA del codi on una variable té vida/sentit
// VARIABLE GLOBALS: LA PESTE / XOCS

// RESUM  que no heu de fer
//
// var/let/const
//
//      $a = ""
//
// No fer variables globals!!

function fire(boolea) {

    var foo;

    if(boolea){
        var foo='bar';

        console.log(foo);
    }else{
        console.log(foo);
    }

}

fire(false);