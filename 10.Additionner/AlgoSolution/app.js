function additionner(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var acc = 0;

  for ( var i = min; i <= max; i++) {
    acc += i;
  }

return(acc);
}

console.log(additionner([4, 10000000]));
// 1+2+3+4 = 10

// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs.

// ----------------- CONSEILS -----------------

// Boucle "for".
// Math.max
// Math.mix


