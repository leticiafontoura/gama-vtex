# Repetições

Repetição é mais uma ferramenta para trabalharmos com algoritmos. 

Existem dois recursos de repetição que possuem o mesmo propósito, cada um com suas particularidades.

Lembrando, todas as instruções são executadas na sequência em que são escritas. Porém, podemos selecionar determinado trecho para que ele seja **executado mais de uma vez**.

## Repetição ENQUANTO

**Enquanto** uma condição for verdadeira, algo será executado repetidamente até ela se tornar **falsa**.

Exemplo, queremos fazer uma instrução que faça a tabuada do 5. Essa instrução será repetida até chegar no último valor da tabuada (10).

```
programa {
	funcao inicio() {
		inteiro num, contador, resultado
		
		escreva("qual tabuada? ")
		leia(num)
		
		contador = 0 //o contador aqui vai representar o "vezes X" da tabuada
		
		enquanto (contador <= 10) { //porque queremos fazer até o número dado x 10
		    resultado = num * contador
		    escreva(num + "x" + contador + "=" + resultado + "\n")
		    contador = contador + 1 //aqui, ao final de cada execução, o contador vai receber o valor atual dele + 1.
            //na primeira repetição, ele tem o valor 0. chegando ao final, é somado o valor 1 a ele. agora, contador vale 1.
            //na segunda repetição, contador valendo 1 ainda atende à condição, então o código é executado novamente, e
            //ao final, contador recebe o valor atual dele (1) e soma +1, passando agora a ser 2. e assim por diante.
		}
	}
}
```

Resolvi montar essa tabela aqui pois ela me ajuda muito a visualizar melhor as estruturas de repetição, o que acontece a cada nova repetição daquela instrução:

Repetição|Contador início|Contador fim
---------|---------------|------------
1|0|1
2|1|2
3|2|3
4|3|4
5|4|5
6|5|6
7|6|7
8|7|8
9|8|9
10|9|10
11|10|11

É comum, em repetições, termos uma variável do tipo "contador" que altera seu valor a cada repetição. Sem a linha `contador = contador + 1`, contador nunca terá seu valor alterado, então a condição da repetição nunca será falsa, e aí temos o chamado `loop infinito`.

É ruim ter `loop infinito`? Depende. Se o seu programa precisa que a repetição **nunca pare**, tudo bem. Agora, se seu programa precisa que a repetição seja finita, aí não podemos ter um `loop infinito`.

Um jogo, por exemplo, pode rodar em um `loop infinito`.

Agora, como `contador` não atende mais à condição `<= 10`, a repetição pára.


## Repetição PARA

A lógica é basicamente a mesma da repetição **enquanto**. A diferença é a estrutura do PARA, que tem as instruções mais determinadas.

```
programa {
	funcao inicio() {
		inteiro num, contador, resultado
		
		escreva("qual tabuada? ")
		leia(num)
		
		para (contador = 0; contador <= 10; contador = contador + 1) { //valor inicial, teste a ser avaliado, incremento do contador ao final da execução do loop
		    resultado = contador * num
		    escreva(num + "x" + contador + " = " + resultado + "\n")
		}
	}
}
```

Vejamos a seguinte situação:

* Peça um número N, e faça o quadrado de todos os números pares até chegar em N (N incluído, se este for par).

Usando a estrutura PARA, podemos fazer de duas formas:

```
programa {
	funcao inicio() {
		inteiro n, numero, quadrado
		
		escreva("digite o número final: ")
		leia(n)
		
		para (numero = 1; numero <= n; numero = numero + 1) {
		    se (numero % 2 == 0) {//teste para ver se o numero é par
		        quadrado = numero * numero
		        escreva(numero + "^2 = " + quadrado + "\n" )
		    }
		}
	}
}
```

É possível deixar o código acima ainda mais enxuto e direto ao ponto. 

Pensa comigo: sem contar o 0, números pares começam a partir do 2. Além disso, se somarmos 2 a cada número par, sempre teremos números pares como resposta. 2, 4, 6, 8 etc. Então:

```
programa {
	funcao inicio() {
		inteiro n, numero, quadrado
		
		escreva("digite o número final: ")
		leia(n)
		
		para (numero = 2; numero <= n; numero = numero + 2) {
		  quadrado = numero * numero
		  escreva(numero + "^2 = " + quadrado + "\n")
		}
	}
}
```

O código acima faz exatamente a mesma coisa do código anterior, mas mais direto ao ponto. Já começando contando a partir do número 2 e somando a ele + 2, sempre obtendo números pares. :)

Supondo que o número dado pelo usuário seja 10, o programa irá calcular o quadrado de todos os números pares, começando em 2, até chegar ao número 10 (incluindo-o). O resultado de saída será:

```
2^2 = 4
4^2 = 16
6^2 = 36
8^2 = 64
10^2 = 100
```