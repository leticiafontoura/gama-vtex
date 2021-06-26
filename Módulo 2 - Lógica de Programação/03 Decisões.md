# Decisões

Como dito na aula **01 Algoritmos.md**, `as instruções podem ser realizadas de forma repetitiva e condicionais`.

Todos os comandos e instruções são executados na sequência em que são escritos.

Mas e se houver algum caminho a seguir?

Exemplo, na receita de bolo, precisamos saber se temos ovos, farinha, açúcar, etc.

Mas **e se** não tivermos algum? Aí *decisões precisam ser tomadas*.

Toda decisão indica que o programa vem executando instrução após instrução, até que uma pergunta seja feita. 

Essa pergunta pode ter dois tipos de resposta: verdadeiro ou falso. A partir da resposta, caso a pergunta seja respondida, caminhos diferentes podem ser tomados.

Essa pergunta pode ser feita a partir de comparações:

```
== se dois valores são iguais
!= se são diferentes
> se um é maior que o outro
>= se um é maior ou igual ao outro
< se um é menor que o outro
<= se um é menor ou igual ao outro
```

Essas são chamadas de operações relacionais, pois relacionam duas grandezas. 

Vamos ver melhor com esse algoritmo escrito para calcular a média de um aluno:

```
programa {
	funcao inicio() {
		real nota1, nota2, media
		
		escreva("digite a nota 1: ")
		leia(nota1)
		escreva("digite a nota 2: ")
		leia(nota2)
		
		media = (nota1 + nota2) / 2
		
		escreva("a media vale = " + media + "\n")
		
		//as perguntas precisam ser intuitivas. se a média é igual ou maior do que 7...
		se (media >= 7.0) {
		    escreva("Parabéns, vc foi aprovada(o). Até um dia!\n") 
		    //este código será executado. se a condição não for atendida, esse trecho de código será DESVIADO e seguirá para o trecho seguinte, se houver.
		}
		
		senao {
		    escreva("Uhul, nos vemos aqui de novo ano que vem!") 
		    //este código só sera executado se a condição do "se" não for atendida. aqui acontece a bifurcação das instruções. se uma coisa, um caminho. se outra coisa, outro caminho.
		}
	}
}
```
Supondo que os dados de entrada fornecidos sejam 10 e 8.

A média `media = (10 + 8) / 2` será 9. 9 é maior ou igual a 7? **SIM! VERDADEIRO!** Sendo assim, a condição `se` é atendida e, após sua execução, o `senão` é ignorado.

Agora, se os dados de entrada fornecidos forem 10 e 3:

A média `media = (10 + 3) / 2` será 6.5. 6.5 é maior ou igual a 7? **NÃO! FALSO!** Sendo assim, a condição `se` **não** é atendida, ou seja, é ignorada, pulando então para a execução do `senão`.



