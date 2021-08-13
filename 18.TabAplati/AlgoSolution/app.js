function aplatisCeTableau(arr) {

    var tableauAplati = [];

    function aplatir(arg){

        if(Array.isArray(arg)) {
            for (var i = 0; i < arg.length; i++) {
                aplatir(arg[i]);
            }
        } else {
            tableauAplati.push(arg);
        }

    };

    arr.forEach(aplatir);
    return tableauAplati;

}
  
console.log(aplatisCeTableau([1, {}, [3, [[4]]]] ));

// [1, [2], [3, [[4]]]]  retourne [1,2,3,4];
// ([1, [], [3, [[4]]]]) retourne [1, 3, 4].
// [1, {}, [3, [[4]]]]   retourne [1, {}, 3, 4].

// ----------------- ÉNONCÉ -----------------

// Cet algorithme prends un tableau composé lui même de plusieurs tableaux en 
// entrée. Vous devez "aplatir" les différentes couches de tableaux, c'est à dire
// retourner un seul tableau qui contient les valeurs de tous les tableaux qui le
// composent.


// ----------------- CONSEILS -----------------

// Recursion;
// Array.isArray();
// forEach();
// Boucle for...