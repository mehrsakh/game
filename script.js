
let playerName = "";
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const startBtn = document.getElementById("startbutton");
const restartBtn = document.getElementById("restartBtn");
const nameInput = document.getElementById("playerNameInput");
const welcomeName = document.querySelector("#game-screen h2");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

startBtn.addEventListener("click", function() {
    const inputName = nameInput.value.trim();
    if(inputName === "") {
        alert("لطفاً نام خود را وارد کنید!");
        return;
    }
    playerName = inputName;
    welcomeName.innerText = `${playerName} انتخاب کنید`;
    document.getElementById("starter").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
});

function play(userChoice) {
    if(roundsPlayed >= maxRounds) return;

    const choices = ["سنگ", "کاغذ", "قیچی"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(userChoice === computerChoice) {
        result = "مساوی شد";
    } else if (
        (userChoice === "سنگ" && computerChoice === "قیچی") ||
        (userChoice === "کاغذ" && computerChoice === "سنگ") ||
        (userChoice === "قیچی" && computerChoice === "کاغذ")
    ) {
        result = "!شما بردید";
        playerScore++;
    } else {
        result = "کامپیوتر برد";
        computerScore++;
    }

    roundsPlayed++;

    resultDiv.innerHTML =
        `انتخاب شما: ${userChoice}<br>` +
        `انتخاب کامپیوتر: ${computerChoice}<br>` +
        result;

    scoreDiv.innerText = `امتیاز ${playerName}: ${playerScore} | امتیاز کامپیوتر: ${computerScore}`;

    if(roundsPlayed === maxRounds) {
        let finalMessage = "";
        if(playerScore > computerScore) finalMessage = `🎉 ${playerName} برنده شد`;
        else if(playerScore < computerScore) finalMessage = "!کامپیوتر برنده شد";
        else finalMessage = "!مساوی شد";

        resultDiv.innerHTML += `<br><br>${finalMessage}`;
        restartBtn.style.display = "inline-block";
    }
}

restartBtn.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    resultDiv.innerHTML = "";
    scoreDiv.innerText = `امتیاز ${playerName}: 0 | امتیاز کامپیوتر: 0`;
    restartBtn.style.display = "none";
});


restartBtnd.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  resultDiv.innerHTML = "";
  scoreDiv.textContent = `امتیاز ${playerName}: 0 | امتیاز کامپیوتر: 0`;
  restartBtn.style.display = "none";
});


