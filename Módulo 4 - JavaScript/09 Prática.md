# Inverter uma string

```javascript
let newStr = "";

function reverseString(str) {
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr)
    }
}

reverseString("leticia");
```

Seguindo a tabela para entender o que acontece em cada iteração do `for`:

Repetição|valor de i começo|saída|valor de i final
---------|-----------------|-----|----------------
1|6|a saída é str na posição 6, que é "a"|5
2|5|a saída é str na posição 5, que é "i"|4
3|4|a saída é str na posição 4, que é "c"|3
4|3|a saída é str na posição 3, que é "i"|2
5|2|a saída é str na posição 2, que é "t"|1
6|1|a saída é str na posição 1, que é "e"|0
7|0|a saída é str na posição 0, que é "l"|0

Se tivéssemos colocado `i = str.length` apenas, o `i` na primeira repetição teria o valor `7`, e não existe essa posição na string dada, por exemplo, retornando o valor undefined.

# Convert to Fahrenheit

```javascript
function convertToFahrenheit(value) {
    return value * 1.8 + 32;
}

console.log(convertToFahrenheit(40));
````
