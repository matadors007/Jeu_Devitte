console.log("Bienvenue dans Notre Jeu !"); 
console.log("On Va chercher un numero entre 0 et 100"); 

var but = Math.floor(Math.random() * 100) + 1;
var nbrelimite = 7;

for(var nbressai=0 ; nbressai<=nbrelimite ; nbressai++){ 
 essai= Number(prompt("Entrer un numero et essayer votre chance")); 
  if (but==essai){
  console.log("Vous avez gagné ! La réponse est :" + but +".");
    break
  } 
  
  else if (nbressai==nbrelimite){
    console.log("Malheureusement ... Tu fini toutes vos essai et la solution est " + but +"...");
    break
  } 
    
  else if (essai<but){
  console.log(" Votre numero "+ essai +" est petit.");
    if (essai<1){
      console.log(" Votre Numero "+ essai +" est inférieur a le numero miniimum du jeux ! Tu dois choisi un numero de 1..100");
    } 
  } 

  else if (essai>but){
    console.log(" Votre numero "+ essai +" est grand.");
    if (essai>100){
      console.log(" Votre Numero "+ essai +"est supérieur a le numero maximum du jeux ! Tu dois choisi un numero de 1..100"); 
    } 
  }
  else {
  console.log("Votre saisie est invalide.");
      } 
}