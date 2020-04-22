var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;


  $(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
      });


$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  // return console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}



function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }

} else {
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout (function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();

  }
}





function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level  " + level);
  var randomNumber = Math.floor((Math.random() * 3) + 1);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  // animatePress(randomChosenColor);

}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();

}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel



// var greenButtonSound = new Audio('sounds/green.mp3');
// document.querySelector("#green").addEventListener("click", function() {
//   greenButtonSound.play()
// });

// $("#green").fadeTo(100, 0.3, function(){
//   $(this).fadeTo(100, 1.0);
// });
