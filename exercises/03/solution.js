/**
 * @description Write a function that receive a string that replace
 * each caracther for behavior in alphabet.
 * @function getFromStringSomeAlpha
 */

const getFromStringSomeAlpha = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    str = str.toLowerCase().split('')

    str.forEach((letter) => {
        if (alphabet.includes(letter)) {
            console.log(alphabet.indexOf(letter))
        }
    })

}
getFromStringSomeAlpha('Meu Carro')