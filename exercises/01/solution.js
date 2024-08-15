/**
    @description Write a function
    that return true if a number
    is 100 or the sum
    of the two numbers are 100.

    @function isEqualOneHundred(x,y)
     
*/

const isEqualOneHundred = (x, y) => {
  return x == 100 || y == 100 || x + y == 100;
};

isEqualOneHundred(50, 50); // true
isEqualOneHundred(100, 0); // true
isEqualOneHundred(0, 100); // true
isEqualOneHundred(25, 25); // false
isEqualOneHundred(0, 0); // false
