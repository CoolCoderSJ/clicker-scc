let score = 0;

let button = 
document.getElementById("clicker")

let scoreLabel = 
document.getElementById("score")

let upgradeButton = 
document.getElementById("autoclicker")

button.addEventListener("click", 
    function () {
        score++;
        scoreLabel.innerText = "Score: " + score;

        if (score >= 10) {
            upgradeButton.disabled = false;
        }
    })