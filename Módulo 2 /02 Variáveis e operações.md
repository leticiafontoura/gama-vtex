# Variáveis e operações

Se todo algoritmo é feito de entrada, processamento e saída, onde ficam armazenadas essas informações fornecidas?

Se quero produzir uma informação, como isso é feito e onde ela é colocada?

## Variáveis

Em analogia à receita de bolo, os ingredientes são separados e cada um armazenado no seu potinho, até que chegue a vez de serem utilizados.

Esses potinhos de armazenamento são as nossas **VARIÁVEIS**. Nas variáveis, armazenamos as informações que vão fazer parte do processo entrada-processamento-saída.

As variáveis são **áreas de memória**, e o conteúdo dessas variáveis pode mudar. 

As informações de variáveis podem ser **quantificadas** e **qualificadas**.

De forma básica, a qualificação das informações que podem ser armazenadas em variáveis são inteiros (números), real (números com pontos) e cadeias ("").

Para o computador, qualificar as informações servem para o computador saber como ele vai codificar a informação.

A quantificação é a ocupação da memória, quanto de espaço da memória você usa no programa.

### Exemplo de armazenamento em variáveis

O código abaixo foi escrito na linguagem PORTUGOL, muito utilizada para iniciantes no estudo da lógica de programação por se assimilar a nossa lingua nativa. :)

```
programa {
	funcao inicio() {
		inteiro var1 //qualificação da variável em tipo inteiro
		real var2 //qualificação da variável em tipo real
		cadeia var3 //qualificação da variável em tipo cadeia (sequência de caracteres)
		
		escreva("por favor, digite um numero inteiro: ")
		leia(var1)
		escreva("agora, digite um número real: ")
		leia(var2)
		escreva("digite um texto: ")
		leia(var3)

        //no bloco acima, estamos pedindo ao usuário por informações de entrada, que estão sendo armazenadas nas variáveis declaradas

		escreva("você digitou os seguintes valores: ")
		escreva(var1 + "\n")
		escreva(var2 + "\n")
		escreva(var3 + "\n")

        //no bloco acima, as informações processadas agora estão sendo exibidas, ou seja, é a parte da saída das informações
	}
}
```

Outro exemplo de código com a realização de operações matemáticas básicas:

```
programa {
	funcao inicio() {
		inteiro valor1, valor2, resultado //aqui, estamos dizendo que todas as variáveis são qualificadas como tipo inteiro

		escreva("digite um valor: ")
		leia(valor1)
		escreva("digite outro valor: ")
		leia(valor2)

        //no bloco acima, as informações fornecidas pelo usuário serão processadas e armazenadas nas respectivas variáveis
		
        //aqui, uma operação de adição
		resultado = valor1 + valor2 //esse é o processamento dos dados
		escreva("resultado da soma = " + resultado + "\n") //aqui, é exibida a saída obtida através do processamento
		
        //aqui, uma operação de subtração
		resultado = valor1 - valor2 //esse é o processamento dos dados
		escreva("resultado da subtração = " + resultado + "\n") //aqui, é exibida a saída obtida através do processamento
		
        //aqui, uma operação de multiplicação
		resultado = valor1 * valor2 //esse é o processamento dos dados
		escreva("resultado da multiplicação = " + resultado + "\n") //aqui, é exibida a saída obtida através do processamento
		
        //aqui, uma operação de divisão
		resultado = valor1 / valor2 //esse é o processamento dos dados
		escreva("resultado da divisão = " + resultado + "\n") //aqui, é exibida a saída obtida através do processamento
		
        //aqui, uma operação para sabermos o valor do RESTO da divisão
		resultado = valor1 % valor2 //esse é o processamento dos dados
		escreva("resultado do resto da divisão = " + resultado + "\n") //aqui, é exibida a saída obtida através do processamento
	}
}
```

Sobre o código acima, uma curiosidade importante.

Vamos supor que os valores fornecidos pelo usuário sejam 20 e 3.

O resultado da soma será 23.

O resultado da subtração será 17.

O resultado da multiplicação será 60.

O resultado da divisão será 6. **Opa, 6?** Sim, porque logo no início do código, foi declarado que a variável `resultado` é do tipo **inteiro**. Números inteiros não possuem casas decimais, então o valor de saída será arredondado! :)

O resultado do resto da divisão será 2.