function difTab(arr1, arr2) {

  var rep = [];

  function checkDiff(premier, second){

    for(var i = 0; i < premier.length; i++) {
      
      if(second.indexOf(premier[i]) === -1){
        rep.push(premier[i]);
      }

    }

  }
  checkDiff(arr1, arr2);
  checkDiff(arr2, arr1);

  return rep;
}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();