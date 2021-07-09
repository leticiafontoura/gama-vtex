# Tipos básicos

## Boolean

```javascript
const contaPaga: boolean = false;
```

## Number

```javascript
const idade: number = 24;
```

## String

```javascript
const nome: string = "Letícia";
```

## Array

```javascript
const idades: number[] = [24, 32, 44, 56];
const idades2: Array<number> = [24, 32, 44, 56];
```

## Tuple

```javascript
let jogadores: [string, string, string];
jogadores = ["Leticia", "Daniel", "Gabriela"];
```

## Enum

```javascript
enum StatusAprovacao() {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusAprovacao: StatusAprovacao = StatusAprovacao.Aprovado; 
```

## Any

```javascript
const retornoDaAPI: any[] = [123, "Leticia", false];
const retornoDAPI = any = {

}
```

## Void

Função que não retorna nada

```javascript
function printarNaTela(msg: string): void {
    console.log(msg);
}
```

## Null e undefined

```javascript
const u: undefined = undefined;
const n: null = null;
```

## Object

```javascript
function criar(obj: object) {
    ...
}

criar({
    propriedade: "valor";
});

criar("string") //dá erro porque o parametro tem que ser do tipo object
```

Documentação sobre os tipos básicos [aqui](https://www.typescriptlang.org/docs/handbook/basic-types.html) :)