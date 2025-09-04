const userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function playSound(name) {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];

    level++;
    $("#level-title").text("Level " + level);

    gamePattern.push(randomChosenColour);
}

$(".btn").on("click", function() {
    const userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    

    console.log(userClickedPattern);
    checkAnswer(userClickedPattern);

    setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
    }, 1000);
    
});

function animatePress(currentColour) {
    $("#"+currentColour).toggleClass("pressed");    
    setTimeout(() => {
        $("#"+currentColour).toggleClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(currentLevel === userClickedPattern){
        console.log("success");
    }
    else{
        console.log("wrong")
    }
}