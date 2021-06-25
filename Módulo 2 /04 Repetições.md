# Repetições

Repetição é mais uma ferramenta para trabalharmos com algoritmos. 

Existem dois recursos de repetição que possuem o mesmo propósito, cada um com suas particularidades.

Lembrando, todas as instruções são executadas na sequência em que são escritas. Porém, podemos selecionar determinado trecho para que ele seja **executado mais de uma vez**.

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


Agora, como `contador` não atende mais à condição `<= 10`, a repetição pára.



