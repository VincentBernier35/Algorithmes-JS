var convertisseurRomain = function(num) {

    var valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var chiffreRomains = 
    [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    var chiffreRomain = '';

    for (var index = 0; index < valeurDecimale.length; index++) {

        while(num >= valeurDecimale[index]){

            chiffreRomain += chiffreRomains[index];
            num -= valeurDecimale[index];

        }

    }

    return chiffreRomain;

}
      
console.log(convertisseurRomain(36));

// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui va convertir des le nombre passé en parametre
// en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// ----------------- CONSEILS -----------------

// For;
// while;
