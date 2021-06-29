# Condicionais

Usamos condicionais para fazermos a verificação de algo.

## IF/ELSE

Exemplo: quero saber `se` algo é verdadeiro. se for...

```javascript
var num = 5;

if (num === 1) {
    console.log("num é igual a 1!");
} else {
    console.log("num não é igual a 1!");
}
```

Podem existir muitas estruturas IF dentro de outras, antes do else final, dependendo da complexidade da verificação.

## SWITCH

O switch é um outro tipo de condicional que, dependendo do caso, pode substituir um if imenso.

O switch verifica casos possíveis quando uma condição é verdadeira.

```javascript
var month = "jan";

switch (month) {
    case "feb":
        console.log("mes 2");
        break; //interrompe o bloco de código caso ele seja atendido.
    case "mar":
        console.log("mes 3");
        break; //interrompe o bloco de código caso ele seja atendido.
    case "apr":
        console.log("mes 4");
        break; //interrompe o bloco de código caso ele seja atendido.
    case "jan":
        console.log("mes 1");
        break; //interrompe o bloco de código caso ele seja atendido.
    default: //quando nenhum caso é atendido
        console.log("nenhum caso atendido")
}
```


