# Operadores

## Operadores aritméticos

- Adição (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/)
- Resto/Módulo (%)
- Incremento (++)
- Decremento (--)

```javascript
var sum = 1 + 2;
var sub = 2 - 1;
var times = 2 * 2;
var divis = 2 / 2;
var mod = 2 % 2;
var num = 1;

console.log(sum);
console.log(sub);
console.log(times);
console.log(divis);
console.log(mod);
console.log(++num); //aqui, ele incrementa o valor de num, que passa a ser 2. se fosse num++, ele só acontece o incremento depois de chamar o num novamente. 
console.log(--num); //aqui, ele decrementa o valor de num, que valia 2, agora volta a valer 1. se fosse num--, ele só acontece o decremento depois de chamar o num novamente. 
```

## Operadores de atribuição

- atribuição = 
- atribuição de soma += 
- atribuição de subtração -=
- atribuição de multiplicação *=
- atribuição de divisão /=
- atribuição de módulo %=

```javascript
var x = 1;
var y = 3;

console.log(x+=y) //é a mesma coisa que escrever x = x + y; retorna 4. agora x vale 4.
console.log(x-=y) //é a mesma coisa que escrever x = x - y; retorna 1. agora x vale 1.
console.log(x*=y) //é a mesma coisa que escrever x = x * y; retorna 3. agora x vale 3.
console.log(x/=y) //é a mesma coisa que escrever x = x / y; retorna 1. agora x vale 1.
console.log(x%=y) //é a mesma coisa que escrever x = x % y; retorna 1. agora x vale 1.
```


## Operadores de comparação

Sempre retornam um valor boolean.

- comparação de valores (==)
- comparação de valores e tipos (===)
- comparação de "diferença" (!=) ou (!==)
- comparação de menor (<) e menor ou igual (<=)
- comparação de maior (>) e maior ou igual (>)

```javascript
var x = 1;
var y = 3;
var z = "1";

console.log(x == z); //retorna TRUE pois estamos comparando apenas o valor, não o tipo.
console.log(x === z); //retorna FALSE porque os TIPOS são difernetes (number e string).
console.log(x != z); //retorna FALSE pois estamos comparando apenas o valor, não o tipo.
console.log(x !== z); //retorna TRUE porque os TIPOS são difernetes (number e string).
console.log(x < y); //retorna true.
console.log(y > x); //retorna true.
```

## Operadores lógicos

Sempre retornam um valor boolean.

- && (e)
- || (ou)
- ! (negação)
