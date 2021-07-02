# Arrays, spread e métodos

## Arrays

É um tipo do dado em que podemos estruturar informações, ter um conjunto de infos.

Podemos atribuir à variáveis e guardar as informações entre `[]`.

```javascript
const alunasGama = ["Letícia", "Paula", "Maria", "Clara"];
```

A forma mais "clássica" de acessar valores em array seria `alunasGama[0]`, que retornaria o valor `Letícia`, por exemplo.

### Spread

O operador `...spread` copia informações de um array anterior.

```javascript
const alunasXp = [...alunasGama, "Simara"];
console.log(alunasXp); //retorna  ["Letícia", "Paula", "Maria", "Clara", "Simara"]
```

### Métodos de iteração

#### Map

```javascript
for (i=0; i < alunasXp.length; i++) {
    console.log(alunasXp[i]);
}
```

Como fazer uma iteração usando um método específico para array?

```javascript
alunasXp.map(aluna => console.log(aluna));
```

o `.map()` é um método que itera por todos os itens de um array. Dentro dele, passamos uma arrow function cujo parâmetro é `aluna`, e demos o console.log em cada `aluna` iterado.

O `.map()` é muito indicado em situações em que não precisamos modificar o array original.

Dentro de `()`, o `map` sempre espera uma função de parâmetro (ele é uma função que espera outra função de parâmetro, ou seja, espera uma função callback). No exemplo acima, usamos a estrutura de `arrow function`, mas também poderia ser:

```javascript
alunasXp.map(function(aluna) {
    console.log(aluna);
})
```

Perceba que o parâmetro `aluna`, em ambas as aplicações, refere-se ao item original do array. É convenção dar o nome desse parâmetro no singular do array.

Mais sobre `.map()` [aqui](https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648) :)

#### Filter

```javascript
const numbers = [34, 45, 67, 90, 55, 76];

const numerosImpares = numeros.filter(numero => numero % 2 !== 0); //retorna os números impares e os guarda na variável numerosImpares
```

Assim como no `.map()`, o `.filter()` também recebe uma função callback como parâmetro, e essa callback recebe outro parâmetro, que são os itens originais do array. Ele também não altera o array original.

Escrevendo o `filter` com função normal:

```javascript
const numbers = [34, 45, 67, 90, 55, 76];

const oddNumbers = numbers.filter(function(number) {
   return number % 2 !== 0;
}); 

console.log(oddNumbers);
```

#### Sort

O método `.sort()` ordena um array, seja em ordem alfabética ou numérica, crescente ou decrescente. Ele modifica o array original.

```javascript

const ages = [1, 7, 5, 23, 10];

console.log(ages.sort((a,b) => a - b)); //retorna o array em ordem crescente.
console.log(ages.sort((a,b) => b - a)); //retorna o array em ordem decrescente.
console.log(ages.sort()); //retorna [1, 10, 23, 5, 7]

const nomes = ["leticia", "daniel", "gabriela", "tiago"]
console.log(nomes.sort()); //retorna o array em ordem alfabética crescente.
console.log(nomes.reverse()); //retorna o array em ordem alfabética decrescente.
```

Artigo muito bom sobre `.sort()` [aqui](https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a) :)

#### Reduce

Esse método reduz o array a um resultado de uma operação matemática. Além da callback, ele também espera outras informações como parâmetro.

```javascript

const numbersTwo = [1, 34, 35];

const somaTwo = numbersTwo.reduce((acumulador, valorProcessado) => {
    return acumulador + valorProcessado;
});

console.log(somaTwo);
```

O `acumulador` "é o valor retornado na ultima iteração e inicia com o primeiro elemento da lista".

O `valorProcessado` é o `valor atual` do item que está sendo iterado, que no final dela será somado ao `acumulador`.

```javascript
const sons = ["auau", "miau", "cócóricó"];
const sonsHtml = sons.reduce((acc, som) => {
  return (acc += `<li>${som}</li>`);
  });

  console.log(sonsHtml)
  ```

No código acima, na primeira iteração, o valor de `acc` é "auau", que é o primeiro item da lista, já que não foi passado um valor inicial. Como não foi dado valor inicial, ele pula a primeira etapa que é somar o inicial com o primeiro elemento, então ele já faz direto "auau + miau", que é o segundo elemento.

Quando coloca um valor inicial, é como se fosse adicionado esse valor no início do array, antes do primeiro valor. Por isso com valor inicial é feita a soma desse valor com o primeiro item do array.

Uma explicação muito boa e detalhada sobre `.reduce()` você encontra [neste artigo](https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380) :)