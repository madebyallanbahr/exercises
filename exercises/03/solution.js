/**
 * @description Write a function that receive a string that replace
 * each caracther for behavior in alphabet.
 * @function replaceWithNextAlphabetChar
 */

const replaceWithNextAlphabetChar = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let actual = str.toLowerCase();
  let replaced = "";

  let strToReplace = actual.split("");

  strToReplace.forEach((letter) => {
    if (alphabet.includes(letter))
      replaced += alphabet[alphabet.indexOf(letter) + 1];
  });

  return { replaced: replaced, actual: actual };
};

replaceWithNextAlphabetChar("Outro");
/* 
-> input: outro 
[
  o -> p,
  u -> v,
  t -> u,
  r -> s,
  o -> p
]

-> output: pvusp
*/
