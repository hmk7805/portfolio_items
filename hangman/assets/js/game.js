$(document).ready(reset);

  var wins = 0;
  var losses = 0;
  var guesses = 6;
  //does this make an array of the user choices?
  var guessed = [];
  var user;
  //user options
  var userOpt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  //computer options
  var computerOpt = ["Alaska",  "Alabama",  "Arkansas",  "Arizona",  "California",  "Colorado",  "Connecticut",  "District of Columbia",  "Delaware",  "Florida",  "Georgia",  "Hawaii",  "Iowa",  "Idaho",  "Illinois",  "Indiana",  "Kansas",  "Kentucky",  "Louisiana",  "Massachusetts",  "Maryland",  "Maine",  "Michigan",  "Minnesota",  "Missouri",  "Mississippi",  "Montana",  "North Carolina",  "North Dakota",  "Nebraska",  "New Hampshire",  "New Jersey",  "New Mexico",  "Nevada",  "New York",  "Ohio",  "Oklahoma",  "Oregon",  "Pennsylvania",  "Rhode Island",  "South Carolina",  "South Dakota",  "Tennessee",  "Texas",  "Utah",  "Virginia",  "Vermont",  "Washington",  "Wisconsin",  "West Virginia",  "Wyoming"]

  var computerGuess;
  var hidden = [];
  var progress = [];

  var letterGuess = 0;
  var nodelist;

  //function that clears the word area
  function wordClear() {
        document.getElementById("word").innerHTML = " "
      }

  //function that generates the comp guess  
  function compRand (){
    
    computerGuess = computerOpt[Math.floor(Math.random() * computerOpt.length)].toLowerCase();
    //loop that displays the placeholders and assigns letter classes to the placeholder spans
    for (var i = 0; i < computerGuess.length; i++) {
      hidden[i] = document.createElement("SPAN");
      hidden[i].setAttribute("class", computerGuess[i])
      // hidden[i].setAttribute("id", "letterPosition" + i)
      hidden[i].innerHTML = '__  ';
      document.getElementById("word").append(hidden[i]);
      if (computerGuess[i] == " "){
        //only way to achieve white space w/o css
        hidden[i].innerHTML = '&nbsp      ';
      }
    }
  }

  function reset() {
    guesses = 6;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
    
    guessed = [];
    document.getElementById("guesses").innerHTML = "Guesses: " + guessed;

    wordClear();
    compRand();

    progress = []
    hidden = []
  };
 
 
  //user key choice
  document.onkeypress=function(event){

      //set variable to key choice
      user = String.fromCharCode(event.keyCode).toLowerCase();
      
      //push variable user into guessed array, other option --> guessed[guessed.length] = user;
      guessed.push(user); 
        
      //this prints the array to the document in a string seperated by ~s   
      document.getElementById("guesses").innerHTML = guessed.join(" ~ ");

      for (var i = 0 ; i < computerGuess.length ; i++ ) {

        //if user is any letter of the word, find the elements with that letter class and change the html to that letter.
        if (user === computerGuess[i]) {

          letterGuess++
          progress.push(user);
          // document.getElementsByClassName('.' + user).innerHTML = user;
          $('.' + user).html(user);
        }
        nodelist = document.getElementsByClassName(user);
        for (var j = 0 ; j < nodelist.length ; j++) {
          nodelist[j].innerhtml = user + " "
          console.log(nodelist[j]);
        }
      }

      // if all of the letters have been chosen, alert a win, increment wins
      if (progress.length === computerGuess.length) {
        setTimeout(function(){
          alert("You Win, the state was " + computerGuess)
        }, 3)
        wins++
        setTimeout(function(){
          reset()
        }, 5);
      }
      
      if (letterGuess === 0) {
        guesses--
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
        }

      if (guesses === 0){
        alert("You Lose, the state was " + computerGuess)
        losses++
        reset()
        }
      


    //testing in console
    console.log("user: " + user);
    console.log("comp: " + computerGuess);
    console.log("w: " + wins);
    console.log("l: " + losses);
    console.log("g: " + guesses);
    console.log("letter is in word " + letterGuess + " times");
    console.log("progress: " + progress);
  
} 
      

  