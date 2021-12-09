

let emailSaisi; //le mail écrit
let emailSaisiCoupe;
let positionArobase;
let reponse = document.getElementById("reponse"); //là ou se trouve le message de "OK" ou "non"
 
function verifMail() {
  emailSaisi = document.getElementById("Email").value;
  if (emailSaisi.includes("@") && emailSaisi.includes(".")) {
    //si le mail inclus @ et . alors
    positionArobase = emailSaisi.indexOf("@");
    //positionArobase = dans emailSaisi si il y a d'inclus l'@ ok on continue
    emailSaisiCoupe = emailSaisi.substring(positionArobase);
    //emailSaisiCoupe = le string email.substring(a partir de @ => la fin de value)
    if (emailSaisiCoupe.includes(".")) {
      //si le emailSaisiCoupe inclus . après le @ alors
      reponse.innerHTML = "Email valide"; //dans le <p> ecrire "..."
    } else {
      reponse.innerHTML = "Email non valide";
    }
  } else {
    reponse.innerHTML = "Email non valide";
  }
} 
document.getElementById("Email").addEventListener("keydown", verifMail, false);
 
// nous allons faire la partie javascript pour le mot de passe 
let mdp;
const regexMaj = new RegExp("[A-Z]"); //permet d'analyser si il y a un caractère Maj de A à Z
const regexMin = new RegExp("[a-z]"); //permet d'analyser si il y a un caractère Min de A à Z
const regexNum = new RegExp("[0-9]"); //permet d'analyser si il y a un caractère numérique de 0 à 9
const regexSpe = new RegExp("\\W"); //permet d'analyser si il y a un caractère spécial
let compteur;
let answer= document.getElementById("answer");
 
function forceMDP() {
  compteur = 0;
  mdp = document.getElementById("mdp").value;
 
  if (regexMaj.test(mdp)) {
    compteur += 1;
  }
  if (regexMin.test(mdp)) {
    compteur += 1;
  }
  if (regexNum.test(mdp)) {
    compteur += 1;
  }
  if (regexSpe.test(mdp)) {
    compteur += 1;
  }
  if (mdp.length < 8) {
    compteur -= 1;
  }
 
  switch (compteur) {
    case 4:
      answer.innerHTML = "Très sécurisé";
      break;
    case 3:
      answer.innerHTML = "Sécurisé";
      break;
    case 2:
      answer.innerHTML = "Moyen";
      break;
    default:
      answer.innerHTML = "Dangereux";
  }
}
 
document.getElementById("mdp").addEventListener("keyup", () => {
  forceMDP();
});
