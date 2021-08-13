function repete(str, num) {


  
}
console.log(repete('abc', 4));

// ----------------- ÉNONCÉ -----------------

// Repetez la chaine(premier parametre) un certain nombre de fois(second parametre).
// Cette algorithme est relativement facile, c'est pourquoi je vais vous demander de
// trouver au moins trois façon différentes de le réaliser.
// Trouver différentes solutions à un algorithme est un bon moyen de progresser.


// ----------------- CONSEILS -----------------

// Recursion.
// opérateur ternaire.
// While;


// Avec boucle while
// function repete(str, num) {

//   var final = '';

//   while(num > 0){
//     final += str;
//     num--;
//   }
  
//   return final;
// }
// console.log(repete('abc', 4));


// Avec recursion
// function repete(str, num) {

//   if(num < 1) {
//     return "";
//   }

//   else {
//     return str + repete(str, num - 1);
//   }
//   // "abc" + "abc" + "abc" + "abc" + ""
// }
// console.log(repete('abc', 4));