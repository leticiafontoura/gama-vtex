//FizzBuzz
//divisivel por 3 > "Fizz"
//divisivel por 5 > "Buzz"
//divisivel por 3 e 5 > "FizzBuzz"
//se nao for um numero > "nao é um numero"
//se nao for divisivel nem por 3 nem por 5 > repete a propria entrada

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return "FizzBuzz";
    } else if (entrada % 3 === 0) {
                return "Fizz";
            } else if (entrada % 5 === 0) {
                        return "Buzz";
                    } else if (typeof entrada !== "number") {
                                return "não é um número";
                            } else {
                                return entrada;
                            }
}

console.log(fizzBuzz(15))

//Reverse a string - imprimir uma strig ao contrário

// let newStr = "";

// function reverseString(str) {
//     for (i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//         console.log(newStr);
//     }
// }

// reverseString("leticia");

//pra só mostrar a string invertida

let newStr = "";

function reverseString(str) {
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr)
}

reverseString("leticia");

//Convert to Fahrenheit

function convertToFahrenheit(value) {
    return value * 1.8 + 32;
}

console.log(convertToFahrenheit(40));