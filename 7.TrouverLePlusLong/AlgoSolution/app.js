// function trouverLongueurMax(str) {

//     var mots = str.split(' ');
//     var longMax = 0;

//     for (var i = 0; i < mots.length; i++){

//         if(mots[i].length > longMax){
//             longMax = mots[i].length;
//         }

//     }

//     return longMax;
// }

// function trouverLongueurMax(str) {

//     var arr = str.split(' ');

//     return arr.reduce(function(x,y){
//         return Math.max(x, y.length)
//     }, 0);

// }

function trouverLongueurMax(str){

    var arr = str.split(' ');

    if(arr.length === 1){
        return arr[0].length;
    }

    if(arr[0].length >= arr[1].length){

        arr.splice(1,1);
        return trouverLongueurMax(arr.join(' '));
    }

    if(arr[0].length <= arr[1].length){
  
        return trouverLongueurMax(arr.slice(1).join(' '));

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
