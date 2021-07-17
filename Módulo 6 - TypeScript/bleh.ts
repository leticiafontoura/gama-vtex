type Funcionario = {
    nome: string,
    sobrenome: string
}

const funcionarios: Funcionario[] = [{
    nome: "Leticia",
    sobrenome: "Fontoura"
    }];

function saudarFuncionarios(funcionarios: Funcionario[]) {
    for (let bunda of funcionarios) {
        console.log(`Nome do funcionario: ${bunda.nome}, sobrenome: ${bunda.sobrenome}`)
    }
}

saudarFuncionarios(funcionarios);

function hello(person){
    return "Ola, " + person;
    }
    let user = "Gama";
    const msg = hello(user);
    console.log(msg)