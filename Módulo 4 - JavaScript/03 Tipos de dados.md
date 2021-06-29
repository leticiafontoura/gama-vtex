# Tipos de dados

O JavaScript é uma linguagem com dados dinamicamente tipados.

Se no Portugol precisamos declarar uma variável colocando o seu tipo (inteiro, cadeia, etc), no JavaScript isso não é necessário.

## Dados primitivos

```javascript
var myName = "Letícia"; //string
var age = 26; //number
var height = 1.52; //number
```

Outros dados primitivos são `null` e `undefined`. `Null` significa que é um objeto vazio, sem dados, enquanto `undefined` significa apenas que algo não foi definido.

O tipo `boolean` é um tipo LÓGICO, que possui os valores `true` e `false`.

```javascript
var isStudent = false;
```

## Objetos

Objetos são um tipo de dado em JavaScript caracterizado por ser um par de `chaves` e `valores`. As `chaves` podem ser declaradas como string, e os `valores` podem ser qualquer tipo de dado, até mesmo outro objeto.

```javascript
var person = {
    "name": "Letícia",
    "idade": 26,
}
```

## Arrays

Arrays são conjuntos de informações.

```javascript
var students = [
    "Simara", "Maria", "João"
]
```

## Funções

Funções também são objetos, mas com a capacidade de serem invocados. Funções também podem receber parâmetro.

```javascript
function sum(a, b) {
    return a + b;
}
```

Mais sobre esses tipos de dados serão estudados profundamente posteriormente.

Existe um operador no JavaScript que pode nos mostrar qual o tipo de um dado.

```javascript
console.log(typeof 32); //retorna number;
console.log(typeof isStudent); //retorna boolean
```



