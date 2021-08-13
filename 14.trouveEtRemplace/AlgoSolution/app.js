function fonctionParam(arr, func) {

  var arr1 = arr.sort();

  for ( var i = 0; i < arr.length; i++) {

    if(func(arr1[0])) {
      break;
    } else {
      arr1.shift();
    }


  }
  return arr1;

}

console.log(fonctionParam([1, 7, 2, 3, 90, 4], function(n) {return n >= 3;}));


// ----------------- ÉNONCÉ -----------------

// Cette fonction reçoit deux paramètres, un tableau et une fonction.
// Triez le premier paramètre(arr).
// Puis retournez un nouveau tableau après avoir utilisé la fonction (second param)
// avec chacun des éléments du premier tableau.
// ----------------- CONSEILS -----------------

// shift();
// Boucle for;