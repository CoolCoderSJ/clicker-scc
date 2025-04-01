let score = 0;

let button = 
document.getElementById("clicker")

let scoreLabel = 
document.getElementById("score")

let upgradeButton = 
document.getElementById("autoclicker")

button.addEventListener("click", 
    function () {
        score++; // score += 5
        showScore();

        if (score >= 10) {
            upgradeButton.disabled = false;
        }
    })

upgradeButton.addEventListener("click", function () {
    score -= 10;
    showScore();
    setInterval(function () {
        score += 20;
        showScore();
    }, 100);
    upgradeButton.disabled = true;
})

function showScore () {
    scoreLabel.innerText = "Score: " + score;
    checkUpgrades();
}

function checkUpgrades() {
    if (score >= 10) {
        upgradeButton.disabled = false;
    }
    else {
        upgradeButton.disabled = true;
    }
}