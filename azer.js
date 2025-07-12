/* const motApplication = "Bonjour";
let motUtilisateur = prompt("Entez le mot: " + motApplication);

if(motUtilisateur === motApplication){
    console.log("Votre mot correspond au mot l'application.");
}
else{
    console.log("Votre mot ne correspond pas au mot l'application.");

} */


const listeMots = ["Cachalot","Pétunia","Serviette"];
const listePhrases = ["Pas de panique !","La vie, l’univers et le reste","Merci pour le poisson"]

let score = 0;

let choix = prompt("Faites un choix entre la liste des mots et des phrases")



while(choix !=="mots" && choix !== "phrases")

{
    choix

}

if(choix === "mots"){

    for(let i=0; i<listeMots.length;i++){
    let motTape = prompt("Entez le mot de la liste: "+ listeMots[i]);

        if (motTape === listeMots[i]){
            score++;
            console.log("Votre score est de:"+ score);
        }
        else{
            console.log("Votre mot ne correspond pas au mot de la liste.");

        }
    }
    console.log("Votre score total est de: "+ score + " sur "+ listeMots.length)

}
else{


    for(let i=0; i<listePhrases.length;i++){
        
        let phraseTape = prompt("Entez la  phrase de la liste: "+ listePhrases[i]);
        if (phraseTape === listePhrases[i]){
            score+=1;
            console.log("Votre score est de:"+ score);
        }
        else{
            console.log("Votre phrase ne correspond pas a la phrase de la liste.");

        }
    }
    console.log("Votre score total est de: "+ score + " sur "+ listePhrases.length)


}








