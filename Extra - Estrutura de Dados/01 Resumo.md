# Pilha

Em linguagem de programação, conjuntos são vetores/arrays. 

Array é uma variável que permite inserir vários valores.

Pilha é uma estrutura de dados com valores "empilhados". É do tipo "lifo" - last in, first out -, ou seja, os últimos dados inseridos são os primeiros a sair.

# Fila

Fila é outra estrutura de dados, do tipo "first in, first out", ou seja, primeiro que entra é o primeiro que sai.

# Lista

Pilha e fila trabalham com vetores/arrays e tamanhos limitados.

Pilha e fila podem ser implementados através de listas. São valores que armazenamos em conjuntos com tamanhos "infinitos". 

# Busca de elementos

Quando falamos em busca de elementos, falamos de conjuntos.

A busca de elementos sempre trata de conjuntos. Você tem um armário e quer procurar uma camiseta. A busca é feita prateleira por prateleira ou gaveta por gaveta.

Mas e se você tem um lugar muito grande para fazer uma busca?

## Busca sequencial

A partir de um determinado conjunto de valores, quero encontrar em qual posição está o valor. Se não encontrar a posição, retorna um valor X de posição inválida.

```javascript

var valores = [5, 8, 10, 22, 45, 38]

function busca(num) {
    for (i=0; i < 6; i++) {
        if (num === valores[i]) {
            return i;
        }
    }

    return -1;
}

console.log(busca(10)); //retorna o número 2, representando a posição em que no número 10 está
console.log(busca(2)); //retorna -1, pois o número não foi encontrado em nenhuma posição
```

A busca sequencial é mais indicada quando há um baixo volume de dados. Mas e para volumes grandes?

## Busca binária

A busca binária é uma busca que é muito mais eficiente, mas exige um pré-requisito: os valores precisam estar ordenados.

Exemplo: [5, 8, 10, 22, 38, 45]. O número que você está procurando é o 38. A busca binária começa pela metade. Se na metade, o número não for o que você quer, ela será reiniciada, porém aqui, a busca saberá que o número da metade é maior ou menor que o número que você quer. No caso, a metade aqui seria o 10. 38 é maior que 10, então a nova busca começará por essa base como sendo o "primeiro" e inicia a busca pela metade de novo. Isso irá acontecer até que o número seja encontrado. 

```javascript

var valores = [5, 8, 10, 22, 38, 45, 50, 55, 69, 100]

function buscaBinaria(num) {
    let inicio;
    let fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;

    while (inicio < fim) {
        meio = parseInt((inicio + fim) / 2); //pra metade sempre ser um número inteiro
        passos = passos + 1; //para descobrirmos quantas vezes esse loop rodou para acharmos o valor
        if (num === valores[meio]) { //se o numero dado na posição "meio" do vetor valores for igual ao numero procurado
            console.log("achei em " + passos " passos")
            return meio; //retorna o meio, ou seja, a posição do número
        } else {
            if (num > valores[meio]) { //se o numero procurado for maior que o número dado na posição "meio" do vetor valores
                inicio = meio + 1; //o novo início será o meio + 1;

            } else {
                fim = meio - 1; //se o número procurado for menor, o fim que precisa mudar
            }
        }
    }

    console.log("não achei em " + passos + " passos")
    return -1;
}
console.log(buscaBinaria(10)); //retorna a frase "achei em 3 passos" e retorna o número 2, que corresponde à posição do número 10 na busca.
```

Por que 3 passos? 

O número `10` está na primeira metade. Na primeira busca, o primeiro `if` não será executado pois 10 não está na metade, mas 10 é menor que `valores[meio]`, então entrará no segundo `else`. Agora, `fim` será `meio - 1`, que é 3, e a busca se dará entre os índices 0 e 3. 

Na segunda busca, definimos que o escopo da busca será entre os índices 0 e 3. Novamente, meio não é igual ao valor buscado, pois agora `meio` vale 1, e 10 é maior que 1, então a busca entrará no segundo `if`, com início agora valendo `meio + 1`, ou seja, `1 + 1`, que é 2. 

Na terceira busca, meio vale 2. E adivinha? 10 está na posição 2! Então a condição do primeiro if é atendida (10 é igual a valores na posição 2). :D YAY!

# Algoritmos de ordenação

Artigo que explica muito aqui o que são e o que fazem [aqui](https://klauslaube.com.br/2019/05/10/algoritmos-de-ordenacao-parte-1.html) :) 