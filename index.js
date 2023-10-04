const { argv } = require("node:process");
const { longestWord } = require("./libs");
const sentence = argv[2];
console.log(`The longest word of this sentence is: "${longestWord(sentence)}"`);
