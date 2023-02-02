let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid selection");
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "tie game!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer wins this round!";
        } else {
            return "You Win!";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "The computer won this round!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "The computer wins this round";
        } else {
            return "You win!"
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    
    console.log("You threw " + userChoice);
    console.log("The computer threw " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();