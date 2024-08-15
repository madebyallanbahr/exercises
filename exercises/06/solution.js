/**
 * @description Write a function that
 * create a string from getting
 * the first 3 characters and the 3 last characters
 * @function createNewStringFromReceived(str)
 */

const createNewStringFromReceived = (string) => {
  if (string.length < 3) return string;
  return string.substring(0, 3) + string.slice(-3);
};

createNewStringFromReceived("Everthing fine"); // Eveine
