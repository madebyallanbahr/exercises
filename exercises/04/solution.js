/**
 * @description Write a function 
 * that returns the current date
 * @function getCurrentDate 
 */

const getCurrentDate = () => {
    return new Date().toLocaleDateString();
};

getCurrentDate(); // dd/mm/yyyy