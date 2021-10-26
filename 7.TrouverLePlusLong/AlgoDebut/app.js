

// function trouverLongueurMax(str){

//     var mots = str.split(' ');
//     var longMax = 0;

//     for(var i = 0; i < mots.length; i++) {
//         if(mots[i].length > longMax){
//             longMax = mots[i].length;
//         }
//     }
//     return longMax;
// }


// console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));

// function trouverLongueurMax(str){

//     var arr = str.split(' ');

//     return arr.reduce(function(accumulateur, valeurCourante){

//         return Math.max(accumulateur, valeurCourante.length)

//     }, 0);
// }


// console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));


function trouverLongueurMax(str){

    var array = str.split(' ');

    
    if(array.length === 1){
        return array[0].length;
    }

    if(array[0].length >= array[1].length){
        array.splice(1,1);
        return trouverLongueurMax(array.join(' '));
    }

    if(array[0].length <= array[1].length){
        return trouverLongueurMax(array.slice(1, array.length).join(' '));
    }

}
console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));






// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Le but ici va être de le faire de trois manières différentes, avec trois concepts
// différents.
 
// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)
