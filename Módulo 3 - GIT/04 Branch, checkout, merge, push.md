# Github

Rede social de código fonte.

Forma de criar repositórios remotos. Tudo que foi criado antes, foi criado de forma LOCAL. Agora, precisamos disponibilizar para outras pessoas, e usamos o github pra isso.

Quando criado o projeto no github, ele dá umas instruções inicias para como "pushar" um repositório existente (o local) no remoto.

`git remote add origin <endereço do repositório remoto>` //o origin aqui é mais uma convenção de boas práticas. seu servidor local é a origem, né? :) 

`git branch -M main`

Agora precisamos enviar nossos arquivos e commits para o repositório remoto, através do comando

`git push -u origin master (ou main)` 

Ao acessar o repositório, o arquivo estará lá :) 

