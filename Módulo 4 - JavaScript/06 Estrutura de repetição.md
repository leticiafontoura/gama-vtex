# Estrutura de repetição

Estruturas de repetição servem para repetirmos determinada ação por tantas vezes.

```javascript
var colors = ["green", "yellow", "blue", "black", "gray"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```
Na estrutura acima, a intenção do `for` é imprimir no console todos os itens do array `colors`. A variável de controle `i` foi inicializada em `0` pois os arrays começam com o índice `0`. Depois, temos a condição a ser obedecida: para valor de `i` menor do que o tamanho do array `colors`. E ao final de cada iteração, o valor de `i` é acrescido com o `++`.

Então, no console, imprimimos o array `colors` na posição do valor `i` para aquela iteração.

A tabela abaixo exemplifica como ficam os valores e as saídas a cada iteração:

Valor de i no começo | Saída | Valor de i no final
---------------------|-------|--------------------
0|colors[0], que é green| i + 1 = 0 + 1 = 1
1|colors[1], que é yellow| i + 1 = 1 + 1 = 2
2|colors[2], que é blue| i + 1 = 2 + 1 = 3
3|colors[3], que é black|i + 1 = 3 + 1 = 4
4|colors[4], que é gray| i + 1 = 4 + 1 = 5
5| aqui não acontece outra repetição pois a nossa condição é enquanto i < tamanho do array, e o array tem tamanho 5| x