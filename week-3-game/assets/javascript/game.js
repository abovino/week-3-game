
var wins = 0;
var losses = 0;
var guessesLeft= 12;
var cpuletter = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var random = cpuletter[Math.round(Math.random() * (cpuletter.length - 1))];
console.log(random);


var lettersGuessed= []; 

document.onkeyup = function(event) {
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   console.log("user guess "+userGuess+" vs "+random); //With this turned on it shows the computers guess so whoever grades this can easily win
   lettersGuessed.push(userGuess); 
   
      if (userGuess == random){
         alert("Correct!");
         wins++;  
         reset()
         } else {
            guessesLeft--;
               if (guessesLeft == 0) {
                  alert ("You lose!");
                  losses++ ;
                  guessesLeft = 12;
                  lettersGuessed = [];   
                  reset()  
               };
      };


function reset(){
      guessesLeft = 12;
      lettersGuessed = [];
      random = cpuletter[Math.round(Math.random() * (cpuletter.length - 1))]
      }

      var html= 
      "<li>Wins: "+ wins + "</li>"+
      "<li>Losses: "+losses + "</li>"+
      "<li>Guesses Left: "+ guessesLeft +"</li>"+
      "<li> Your Guesses so far: "+ lettersGuessed +"</li>";

      document.querySelector('.list-group').innerHTML = html;
   
   }