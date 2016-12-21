
$(document).ready(reset);
  //set original game settings
  var wins = 0;
  var losses = 0;
  var guesses = 9;
  //does this make an array of the user choices?
  var guessed = [];
  var user;
  //computer options
  var computerOpt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var computerGuess;
  //function that generates the comp guess  
  function compRand (){
    console.log(computerOpt);
    computerGuess = computerOpt[Math.floor(Math.random() * computerOpt.length)];
  }

  //function to reset game without refresh
  function reset() {
    guesses = 9;
    document.getElementById("guessesLeft").innerHTML = guesses;
    compRand();
    guessed = [];
    document.getElementById("guesses").innerHTML = guessed;
  }

//user key choice
document.onkeypress=function(event){
  user = String.fromCharCode(event.keyCode).toLowerCase();
  guessed.push(user); 
  //this print the array to the document in a string seperated by ~s?    
  document.getElementById("guesses").innerHTML = guessed.join(" ~ ");
  guesses--;
  
  //compare if same
  if (user === computerGuess) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    reset();
  }
    
  //compare if different
  else {
    document.getElementById("guessesLeft").innerHTML = guesses;   
  } 
  
  //when guesses run out on a loss
  if (guesses === 0){
  losses++;
  document.getElementById("losses").innerHTML =losses;
  reset();
  } 
  

    //testing in console
console.log("user: " + user);
console.log("comp: " + computerGuess);
console.log("w: " + wins);
console.log("l: " + losses);
console.log("g: " + guesses);
}
