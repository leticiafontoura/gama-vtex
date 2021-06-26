# Ignore

O que é o arquivo `.gitignore` ?

Esse arquivo serve para especificarmos quais arquivos NÃO QUEREMOS compartilhar no nosso repositório.

Exemplo:

Em alguns projetos, pode existir uma pasta chamada `node_modules`, que é uma pasta onde estão várias e várias dependências que o projeto precisa para rodar. Essas dependências são instaladas na máquina da pessoa que está desenvolvendo.

No arquivo `.gitignore`, podemos especificar que `node_modules` será uma pasta/arquivo IGNORADO ao subir para o repositório remoto, para não pesar muito, já que quem for utilizar o projeto pode instalar o `node_modules` na própria máquina.