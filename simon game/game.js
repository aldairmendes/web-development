var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function() {
    const userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
    
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
          playSound("wrong");

          $("body").toggleClass("game-over");
          $("#level-title").text("Game Over, press a key to play again");


          setTimeout(function () {
            $("body").toggleClass("game-over");
          }, 200);

          gameOver();

          setTimeout(function () {
            nextSequence();
          }, 1500);
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];


    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    animatePress(randomChosenColour);
}

function animatePress(currentColour) {
    $("#"+currentColour).toggleClass("pressed");    
    setTimeout(() => {
        $("#"+currentColour).toggleClass("pressed");
    }, 100);
}

function playSound(name) {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function gameOver() {
    level = 0;
    gamePattern = [];
    started = false;
}