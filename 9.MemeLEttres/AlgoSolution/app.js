function memeLettres(arr) {

  var test = arr[1].toLowerCase();
  var cible = arr[0].toLowerCase();

  for(i=0; i<test.length; i++) {

    if(cible.indexOf(test[i]) === -1) {
      return false;
    }

  }

  return true;
}
console.log(memeLettres(["concupiscence", "sens"]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();


