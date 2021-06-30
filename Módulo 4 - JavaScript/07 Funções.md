# Funções

Funções tem o poder de executar algo para nós. 

A declaração se dá através da palavra reservada `function`, seguida (ou não) de um nome (uma boa prática é dar nome como verbo, já que a função é uma ação), depois `()`, e nesse `()` podem ser inseridos parâmetros.

```javascript
function sayHello() {
    console.log("Hello, world!")
}
```

Para executarmos uma função, precisamos chamá-la:

```javascript
sayHello();
```

Sobre parâmetro, a função acima ficaria da seguinte forma: 

```javascript
function sayHello(name) {
    console.log("Hello, " + name)
}

sayHello("Letícia"); //a saída disso será Hello, Letícia
```

[Aqui](https://medium.com/reactbrasil/como-o-javascript-funciona-entendendo-as-fun%C3%A7%C3%B5es-e-suas-formas-de-uso-eb387c7fa138) tem um artigo bem completo sobre vários tipos de funções e parâmetros de funções.

[Aqui](https://www.w3schools.com/js/js_functions.asp), a explicação da W3Schools sobre funções.