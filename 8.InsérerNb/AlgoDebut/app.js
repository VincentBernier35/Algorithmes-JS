// first way to solved it------

// function insere(arr, num) {
//     var tri = arr.sort();
//     console.log(arr);

// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] >= num) {
//         return index
//     }
// }



// }

// console.log(insere([30,45,87,96,54,29], 60));

//---------------------------------

// 2nd way to solved it -------

function insere(arr, num) {

    arr.push(num);


    arr.sort();

    return arr.indexOf(num);
  


}

console.log(insere([30,45,87,96,54,29], 60));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau et un nombre en parametre.
// Vous devez d'abord trier ce tableau du plus petit au plus grand.
// Puis retourner la position du nombre si on l'insère dans ce tableau
// entre la valeur en dessous et au dessus de ce nombre.

// Par exemple : insere([10,20,30,40],25) -> 2 
// insere([30,45,87,96,54,29], 2000) -> 6, car il sera inseré à la 6eme place.

// ----------------- CONSEILS -----------------

// la premiere position d'un tableau est 0 !
// Tableau ->  [1,2,3,4]
// Position ->  0 1 2 3
// sort(); permet de trier.
// Boucle "For";
// N'oubliez le cas ou le nombre est le plus grand de la liste.

// Encore une fois si vous trouvez des solutions sans les conseils que je donne,
// c'est parfait, il y a 100 façons de faire un même algo.


