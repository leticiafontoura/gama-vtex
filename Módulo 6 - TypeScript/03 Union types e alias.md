# Union Types

Union Types é uma forma de definir que uma variável/parametro/etc possa ter um tipo ou OUTRO tipo.

Quando algo pode ter mais de um tipo.

```javascript
function exibirNota(nota: number | string | boolean) {
    console.log(`A nota é ${nota}`)
}

exibirNota('10');
exibirNota(10);
exibirNota(false);
```

# Alias

O `alias` cria "atalhos" para os tipos.

```javascript
type Funcionario = {
    nome: string,
    sobrenome: string
}

const funcionarios: Funcionario[] = [{
    nome: "Leticia",
    sobrenome: "Fontoura"
    }];

function saudarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log(`Nome do funcionário: ${funcionario.nome}`)
    }
}
```
