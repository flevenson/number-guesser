// generate random number 1-100

function generate_number () {

 return Math.floor(Math.random() * 100 + 1)
};

var randomNum = generate_number ();

// connect submit button to user input

var guessInput = document.querySelector ('#guess-input');
var guessButton = document.querySelector ('#guess-button');
var lastGuess = document.querySelector ('#last-guess');
var clearButton = document.querySelector ('#clear-button');
var inform = document.querySelector ('#inform');
var highOrLow = document.querySelector ('#high-or-low');
var resetButton = document.querySelector ('#reset-button');

clearButton.disabled = true ;
resetButton.disabled = true ;
guessButton.disabled = true ;

  // get input

guessButton.addEventListener('click', function () {
  event.preventDefault();
  var parsed_number = parseInt(guessInput.value, 10);
  lastGuess.innerHTML = parsed_number;
  if (parsed_number > randomNum && parsed_number <= 100){
    highOrLow.innerHTML = "That Is Too High, Try Again";
    inform.innerHTML = "Your Last Guess Was";
  } else if (parsed_number < randomNum && parsed_number >=1){
    highOrLow.innerHTML = "That Is Too Low, Try Again";
    inform.innerHTML = "Your Last Guess Was";
  } else if (parsed_number > 100 || parsed_number < 1){
    alert ("That Number is out of Range, Try Harder")
    lastGuess.innerHTML = "Follow Instructions!"
  } else if (isNaN(parsed_number)){
    alert ("This is not a valid number, Try Harder");
    guessInput.value = "";
    lastGuess.innerHTML = "C'mon!";
    clearButton.disabled = true;
  } else if (parsed_number === randomNum){
    updateUserResult('low', 'whatever you want to say')
    resetButton.disabled = false;
  }; 
});

function updateUserResult(highOrLow, moreInfo) {
  inform.innerHTML = highOrLow;
  highOrLow.innerHTML = moreInfo;  
}


guessInput.addEventListener ('keydown', function() {
  clearButton.disabled = false;
  guessButton.disabled = false;
});

// make button clear guess
  // make the button a variable

clearButton.addEventListener ('click', function() {
  event.preventDefault ();
  // lastGuess.innerHTML = "";
  guessInput.value = "";
  clearButton.disabled = true;
});


// make button reset game

resetButton.addEventListener ('click', function(){
  event.preventDefault ();
  randomNum = generate_number ();
  highOrLow.innerHTML = "Just Guess a Number Silly";
  inform.innerHTML = "Guess a Number 1-100";
  lastGuess.innerHTML = "I Believe in You";
    guessInput.value = "";
    clearButton.disabled = true;
    resetButton.disabled = true;
    guessButton.disabled = true;
});




