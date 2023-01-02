
/**
 * Exercice
 */
 console.log("--------- Exercice  -------------------");

// 1- Demander à l'utilisateur plusieurs mots (séparés par des virgules).
let userWord = prompt("Veillez renseigné plusieur mot separé pas des virgule");
console.log(userWord);

// 2- Mettez les mots dans un tableau.
let userWordArray = userWord.split(',');
console.log(userWordArray);


// 3- Console.log les mots un par ligne, dans un cadre rectangulaire comme indiqué ci-dessous.

/**
 * @Description : la fonction retourne le caractère * x fois en fonction de la longueur du mot le plus long du tableau
 * @returns : 
 */
function userWordArrayBig(){
    let userWordArrayBig = 0;
    for (let i = 0; i < userWordArray.length; i++) {
        if (userWordArrayBig < userWordArray[i].length) {
            userWordArrayBig =  userWordArray[i].length;
        }
    }
    let incrementStart = "";
    for (let j = 0; j < userWordArrayBig; j++) {
        incrementStart += "*";
    }
    return `${incrementStart}****`;
}

for (let i = 0; i < userWordArray.length; i++) {

    let numberUserWordArrayBig = userWordArrayBig().length;
    let numberUserWordArrayRemaining = userWordArray[i].length + 4;

    let characterDifference = numberUserWordArrayBig-numberUserWordArrayRemaining;

    let incrementSpace = "";
    for (let j = 0; j < characterDifference; j++) {
        incrementSpace += " ";
    }

    // ce bock retoune chaque mot du tableau en ajoutant au debut et à la fin le caractére *
    if (i == 0 ) {
        console.log(`
        ${userWordArrayBig()}
        * ${userWordArray[i]}${incrementSpace} *
        `);
    }else if (i == userWordArray.length - 1){
        console.log(`
        * ${userWordArray[i]}${incrementSpace} *
        ${userWordArrayBig()}
        `);
    }else{
        console.log(`
        * ${userWordArray[i]}${incrementSpace} *
        `);
    }
}

// 4- Consultez les conseils et les exigences ci-dessous.
