function meilleurInvestissement(arr){

  var meilleurProfit = 0;
  var test = 0;
  var pos = 0;
  var date = [];
  var jours = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

  for(var i = 0; i < arr.length; i++) {
    test = arr[i];

    for(var j = pos; j < arr.length; j++) {
      // console.log(arr[j] + "-" + test);

      if(arr[j] - test > meilleurProfit){
        meilleurProfit = arr[j] - test;

        date.push([test, arr[j]]);
        if(date.length > 1) {
          date.shift();
        }
      }
    }
    pos++;
  }
console.log(date);

return "Le meilleur coup à faire cette semaine était d'investir le " + 
jours[arr.indexOf(date[0][0])] +
" et de revendre le "+ jours[arr.indexOf(date[0][1])] + " pour un bénéfice de " + meilleurProfit;

}

console.log(meilleurInvestissement([50,10,20,2,80,60,20]));


// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les 
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et 
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi(4eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montantdu bénéfice.

// Bon courage !


// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();
