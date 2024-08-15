/**
 * @description Write a function that put in front a string the word
 * "New!" if str already have return it self.
 * @function returnNewInFrontString(str)
 */

const returnNewInFrontString = (string) => {
  if (!string) return null;
  if (string.includes("New!")) return string;
  return (string = "New!" + string);
};

returnNewInFrontString('New!') // New!
returnNewInFrontString('Something') // New!Something