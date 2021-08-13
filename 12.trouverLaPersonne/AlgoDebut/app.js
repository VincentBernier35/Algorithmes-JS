function trouverLaPersonne(data, source) {


}

console.log(
  trouverLaPersonne(
  [
    { prenom: "Tom", nom: "Durand" },
    { prenom: "Juliette", nom: "Garcia" },
    { prenom: "Jean", nom: "Lafite" },
    { prenom: "Lucien", nom: "Lafite" },
    { prenom: "Lucien", abc: "Lafite" }
  ], 
    { nom: "Lafite" }
  ));


// ----------------- ÉNONCÉ -----------------

// On passe en entrée un tableau d'objet et un objet, vous devez afficher, dans un
// tableau, les objets qui ont la même propriété("nom") ET la même valeur
// associée à cette propriété.
// l'exemple ici devrai retourner : [{prenom: "Jean", nom: "Lafite"}, {prenom: "Lucien", nom: "Lafite"}];

// ----------------- CONSEILS -----------------

// Object.keys(obj) -> renvoie un tableau avec les propriétés d'un objet.
// filter(), filtre et retourne un tableau(false, undefined, null sont filtrés d'un tableau).
// obj.hasOwnProperty() -> vérifie si un objet possede une propriete, retourne
// true ou false;