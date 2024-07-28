//Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

//Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

const READLINE = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUserInput() {
prompt("Welcome to Madlib!");
prompt("Enter a noun: ");
let inputNoun = READLINE.question();
prompt("Enter a verb: ");
let inputVerb = READLINE.question();
prompt("Enter a adjective: ");
let inputAdjective = READLINE.question();
prompt("Enter a adverb: ");
let inputAdverb = READLINE.question();

return { noun: inputNoun, verb: inputVerb, adjective: inputAdjective, adverb: inputAdverb, };
}

function generateMadlib() {
  const POEMS = {
    philosophical: ({ noun, verb, adjective, adverb }) => `In the realm of thought, the ${adjective} ${noun} sought to ${verb} ${adverb}, a mirror to the soul's intricate whispers.`,
    sad: ({ noun, verb, adjective, adverb }) => 
      `Beneath the silent moon, the ${adjective} ${noun} tried to ${verb} ${adverb}, only to sigh at the world's cold shoulder.`,
    romantic: ({ noun, verb, adjective, adverb }) => 
      `Under the velvet sky, the ${adjective} ${noun} used to ${verb} ${adverb}, whispering sweet nothings into the night's tender ear.`,
  };

  let madlib = Object.keys(POEMS)[Math.floor(Math.random() * Object.keys(POEMS).length)];
  return POEMS[madlib](getUserInput()); 
}

console.log(generateMadlib());