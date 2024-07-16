const READLINE = require("readline-sync");
const MESSAGES = require("./messages.json");

const CHOICES = {
  rock: {
    validInputs: ["1", "r", "rock"],
    winningScenarios: ["rockscissors", "rocklizard"]
  },
  paper: {
    validInputs: ["2", "p", "paper"],
    winningScenarios: ["paperrock", "paperspock"]
  },
  scissors: {
    validInputs: ["3", "sc", "scissors"],
    winningScenarios: ["scissorspaper", "scissorslizard"]
  },
  lizard: {
    validInputs: ["4", "l", "lizard"],
    winningScenarios: ["lizardspock", "lizardpaper"]
  },
  spock: {
    validInputs: ["5", "sp", "spock"],
    winningScenarios: ["spockscissors", "spockrock"]
  }
};

function distinctivePrompt(message) {
  console.log(`=> ${message}`);
}

let currentLang = getUserLanguage();

function getUserLanguage() {
  console.clear();
  distinctivePrompt(MESSAGES['welcome']);
  displayLanguages();
  let langChoice = parseInt(READLINE.question(), 10) - 1;
  const languages = Object.keys(MESSAGES.languages);
  while (isNaN(langChoice) ||
  langChoice < 0 ||
  langChoice >= languages.length) {
    console.clear();
    distinctivePrompt(MESSAGES['invalid_language_choice']);
    langChoice = parseInt(READLINE.question(), 10) - 1;
  }
  return languages[langChoice];
}

function displayLanguages() {
  const languages = Object.keys(MESSAGES.languages);
  languages.forEach((lang, index) => {
    distinctivePrompt(`${index + 1} for ${lang.toUpperCase()}`);
  });
}

function displayRules() {
  console.clear();
  console.log(MESSAGES.languages[currentLang]['rules']);
}

function getUserChoice() {
  distinctivePrompt(MESSAGES.languages[currentLang]['options']);

  function findChoice(input) {
    return Object.keys(CHOICES).find(key =>
      CHOICES[key].validInputs.includes(input)
    );
  }

  let input = READLINE.question().toLowerCase().trim();
  let choice = findChoice(input);

  while (!choice) {
    console.clear();
    distinctivePrompt(MESSAGES.languages[currentLang]['invalid_choice']);
    distinctivePrompt(MESSAGES.languages[currentLang]['options']);
    input = READLINE.question().toLowerCase().trim();
    choice = findChoice(input);
  }

  return choice;
}

function getComputerChoice() {
  console.clear();
  const choices = Object.keys(CHOICES);
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function gameLogic(userChoice, computerChoice) {
  let scenario = userChoice.concat(computerChoice);
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (CHOICES[userChoice].winningScenarios.includes(scenario)) {
    return 'win';
  } else {
    return 'lose';
  }
}

function playSingleRound() {
  let userChoice = getUserChoice();
  let compChoice = getComputerChoice();
  distinctivePrompt(`You chose ${userChoice}, computer chose ${compChoice}`);
  let singleRoundOutcome = gameLogic(userChoice, compChoice);
  return singleRoundOutcome;
}

function displaySingleRoundOutcome(singleRoundOutcome) {
  if (singleRoundOutcome === 'win') {
    distinctivePrompt(MESSAGES.languages[currentLang]['user_wins_round']);
  } else if (singleRoundOutcome === 'lose') {
    distinctivePrompt(MESSAGES.languages[currentLang]['computer_wins_round']);
  } else {
    distinctivePrompt(MESSAGES.languages[currentLang]['tie_round']);
  }
}

function updateScores(singleRoundOutcome, userWins, computerWins) {
  if (singleRoundOutcome === 'win') {
    userWins++;
  } else if (singleRoundOutcome === 'lose') {
    computerWins++;
  }
  return [userWins, computerWins];
}

function playThreeRounds() {
  let userWins = 0;
  let computerWins = 0;
  for (let round = 0; round < 3; round++) {
    let singleRoundOutcome = playSingleRound();
    [userWins, computerWins] =
    updateScores(singleRoundOutcome, userWins, computerWins);
    displaySingleRoundOutcome(singleRoundOutcome);
  }
  displayFinalGameOutcome(userWins, computerWins);
}

function displayFinalGameOutcome(userWins, computerWins) {
  console.clear();
  if (userWins > computerWins) {
    distinctivePrompt(`Final Score: You won ${userWins} ${(userWins === 1) ? "round" : "rounds"}. ${(computerWins === 0) ? "Computer didn't win any" : "Computer won 1 round"}.`);
    distinctivePrompt(MESSAGES.languages[currentLang]['win_game']);
  } else if (computerWins > userWins) {
    distinctivePrompt(`Final Score: Computer won ${computerWins} ${(computerWins === 1) ? "round" : "rounds"}. ${(userWins === 0) ? "You didn't win any" : "You won 1 round"}.`);
    distinctivePrompt(MESSAGES.languages[currentLang]['lose_game']);
  } else {
    distinctivePrompt(MESSAGES.languages[currentLang]['tie_game']);
  }
}

function userWantsAnotherGame() {
  distinctivePrompt(MESSAGES.languages[currentLang]['another_round']);
  let userDecision = READLINE.question().toLowerCase();
  while (!MESSAGES.languages[currentLang]['yes'].includes(userDecision) && !MESSAGES.languages[currentLang]['no'].includes(userDecision)) {
    console.clear();
    distinctivePrompt(MESSAGES.languages[currentLang]['yes_no_prompt']);
    userDecision = READLINE.question().toLowerCase();
  }
  console.clear();
  return MESSAGES.languages[currentLang]['yes'].includes(userDecision);
}

function runGame() {
  do {
    displayRules();
    playThreeRounds();
  } while (userWantsAnotherGame());
  console.clear();
  distinctivePrompt(MESSAGES.languages[currentLang]['thanks']);
}

runGame();