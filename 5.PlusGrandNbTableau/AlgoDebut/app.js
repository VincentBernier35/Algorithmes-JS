function plusGrandNb(arr) {
 
  // premiere itération
  var resultats = [];
  for (global = 0; global < arr.length; global++) {


    // deuxième itération 
    var nbMax = arr [global][0];
    for(sousTableau = 0; sousTableau <arr[global].length; sousTableau++){


      //condition pour chercher la valeur max
      if (arr[global][sousTableau] > nbMax) {
        nbMax = arr[global][sousTableau];
      }
    }

    //conclusion et résultats
    resultats.push(nbMax);
  }

  return resultats;


}
  



console.log(plusGrandNb([
                        [1, 5, 8, 3],
                        [15, 47, 88, 26],
                        [32, 35, 37, 39],
                        [3000, 1001, 857, 1]
                      ]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en 
// argument et qui retourne un seul tableau qui contient la valeur maximale de 
// chaque tableaux.

// ----------------- CONSEILS -----------------

// Une boucle "for" permet d'itérer dans un tableau.
// Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...

// la méhode [].push(), pour pousser un élément dans un tableau;
// Testez :


// var arrTest = [0,10];
// arrTest.push(80);
// arrTest.push(870);
// arrTest.push(80506);
// console.log(arrTest);




