console.log("Bienvenue dans Notre Jeu !");
console.log("On Va chercher un numero entre 0 et 100");

var but = Math.floor(Math.random() * 100) + 1; //il choisi un numero dans l'intervalle de [1..100]//
//"+1" car random (100) est dans l'intervalle de [0..99]//  
var nbrelimite = 7; //nombre limite d'essai d'essai sont 8 mais on ecrire 7 car il commance a quanter a partir de 0//  
var nbressai = 0;
for (nbressai = 0; nbressai <= nbrelimite; nbressai++) {
  essai = Number(prompt("Entrer un numero et essayer votre chance"));
  if (but == essai) {
    console.log("Vous avez gagné ! La réponse est :" + but + ".");
    break //"break" est pour arreter et terminer le jeux lorsque il donne la bonne reponse// 
  }

  else if (nbressai == nbrelimite) {
    console.log("Malheureusement ... Tu fini toutes vos essai et la solution est " + but + "...");
    break 
  }

  else if (essai < but) {
    console.log(" Votre numero " + essai + " est petit.");
     //il retourne un message pour approcher le resultat pour le joueur//
    if (essai < 1) {
      console.log(" Votre Numero " + essai + " est inférieur a le numero miniimum du jeux ! Tu dois choisi un numero de 1..100");
      //cette condition pour ne depasse jamais les limites//
    }
  }

  else if (essai > but) {
    console.log(" Votre numero " + essai + " est grand.");
    if (essai > 100) {
      console.log(" Votre Numero " + essai + "est supérieur a le numero maximum du jeux ! Tu dois choisi un numero de 1..100");
    }
  }
  else {
    console.log("Votre saisie est invalide."); 
    //il affiche un message lorsque le joueur n'ecrit pas un numero//
  }
}