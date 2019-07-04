



function manche() {
  var but = Math.floor(Math.random() * 100) + 1;   // nb a deviner
  var cpt = 0;    // nb de coups pour le trouver
  var saisie;     // nb tape par le joueur
  var msg = 'Le nombre a deviner est compris entre ' + 1 + ' et ' + 100 + '.';
  var limite = 8;

  do { 
    saisie = prompt(msg);

    // si "Annuler"

    if (saisie == null)
      return 0;
    
    cpt++;
   
    if (saisie > but)
      msg = "votre numero est superieur de numero cherchant";
    else
      msg = "votre numero inferieur de numero cherchant";
   
  }
  while (saisie != but && cpt<3 );


  return cpt;
   
}



function Partie() {
  var cpt = 0;    // nb de manches jouees
  var best_score = 0;     // meilleur score
  var score;      // score de la partie en cours
  var continuer;
  var limite=8;
  
  do {
    score = manche();   // joue la manche
    if (score) {
      cpt++;
      if (score < best_score || best_score == 0 )
        best_score = score;
      continuer = confirm("Bravo, tu as gagne en " + score + " coups.\nVeux-tu rejouer ?");

    }
    else
      continuer = false;
  }
  while (continuer );
  

  alert("Tu as joue " + cpt + " manche(s).\nTon meilleur score est de " + best_score + " coups.");
  return best_score;

}
