// red,blue,orange,white,gray,purple

let Listedemots = prompt("Entrez votre liste de mots avec des virgules comme separateur");

let tableaudemots = Listedemots.split(",");

let maxLength = 0;

let motetoile = '';

tableaudemots.forEach((mot)=>{

    if(maxLength < mot.length)
    {
        maxLength = mot.length
    }
});

maxStartLength = maxLength + 4;
motetoile +=   "*".repeat(maxStartLength);
motetoile += "\n";
let espace = '';

 for(let index=0; index < tableaudemots.length; index++)
{
    let espacedenombre = maxStartLength - tableaudemots[index].length - 3 ;
    espace = ' '.repeat(espacedenombre)

    motetoile +=  "* " + tableaudemots[index] + espace + "* \n";
}

motetoile = motetoile + "*".repeat(maxStartLength);

 console.log(motetoile);