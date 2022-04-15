let computerNumber = Math.floor(Math.random() * 100) + 1;
let userInput = document.getElementById("user_input");
let playButton = document.getElementById("play_button");
let resetButton = document.getElementById("reset_button");
let result = document.getElementById("result_area");
let countArea = document.getElementById("count_area");
let count = 10;

console.log(computerNumber);

function play() {
  let userValue = userInput.value;
  if (userValue >= 1 && userValue <= 100) {
    if (userValue < computerNumber) {
      result.innerHTML = "UP!";
    } else if (userValue > computerNumber) {
      result.innerHTML = "DOWN!";
    } else {
      result.innerHTML = "정답!!";
      playButton.disabled = true;
      playButton.style.background = "gray";
    }
  } else {
    result.innerHTML = "<span>범위내의 숫자를 대셈</span>";
    count++;
  }
  userInput.value = "";
  userInput.focus();
  count--;
  countArea.innerHTML = `남은 기회 : ${count}회`;
  if (count < 1) {
    playButton.disabled = true;
    playButton.style.background = "gray";
  }
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", function () {
  userInput.value = "";
});

playButton.addEventListener("mousedown", function () {
  playButton.style.background = "darkgreen";
});
playButton.addEventListener("mouseup", function () {
  playButton.style.background = "green";
});
resetButton.addEventListener("mousedown", function () {
  resetButton.style.background = "brown";
});
resetButton.addEventListener("mouseup", function () {
  resetButton.style.background = "tomato";
});
