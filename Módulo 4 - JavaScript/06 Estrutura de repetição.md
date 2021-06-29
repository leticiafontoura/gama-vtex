# Estrutura de repetição

Estruturas de repetição servem para repetirmos determinada ação por tantas vezes.

## For

```javascript
var colors = ["green", "yellow", "blue", "black", "gray"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```
Na estrutura acima, a intenção do `for` é imprimir no console todos os itens do array `colors`. A variável de controle `i` foi inicializada em `0` pois os arrays começam com o índice `0`. Depois, temos a condição a ser obedecida: para valor de `i` menor do que o tamanho do array `colors`. E ao final de cada iteração, o valor de `i` é acrescido com o `++`.

Então, no console, imprimimos o array `colors` na posição do valor `i` para aquela iteração.

A tabela abaixo exemplifica como ficam os valores e as saídas a cada iteração:

Repetição | Valor de i no começo | Saída | Valor de i no final
----------|---------------------|-------|--------------------
1|0|colors[0], que é green| i + 1 = 0 + 1 = 1
2|1|colors[1], que é yellow| i + 1 = 1 + 1 = 2
3|2|colors[2], que é blue| i + 1 = 2 + 1 = 3
4|3|colors[3], que é black|i + 1 = 3 + 1 = 4
5|4|colors[4], que é gray| i + 1 = 4 + 1 = 5
**|5| **| **

**aqui não acontece outra repetição pois a nossa condição é enquanto i < tamanho do array, e o array tem tamanho 5. se fosse i <= tamanho do array, teríamos um erro, pois no array não existe a posição índice 5.

## While

O `while` também é uma estrutura de repetição similar ao for, mudando a estrutura. Ele executa a repetição de um dado bloco enquanto a informação X for verdadeira. A verificação da condição é realizada logo no início. Se a condição de cara já for falsa, o laço de repetição nunca é executado.

```javascript
var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
```

O resultado no console será:

```
0
1
2
3
4
5
6
7
8
9
```

A diferença de uso de `for` e `while`, geralmente, é que se usa o `for` quando você sabe quantas vezes o laço será repetido, e o `while` quando não se sabe a quantidade de vezes. Mas não é nada escrito em pedra, apenas uma convenção.

## Do... while

Similar ao `while`. A diferença é que a verificação da informação condicional está no fim. Primeiro ele executa, e ao fim verifica a condição. Ou seja, a estrutura `do while` sempre será executada pelo menos uma vez.

```javascript
var i = 1;

do {
    console.log(i);
    i++
} while (i < 10)

```

O resultado no console será:

```
0
1
2
3
4
5
6
7
8
9
```

[Aqui](https://levelup.gitconnected.com/the-difference-between-for-loops-and-while-loops-in-javascript-6029f45faeba) está um artigo muito bom (em inglês) sobre a diferença desses três laços de repetição :) 