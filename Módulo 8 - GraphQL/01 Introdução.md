# Introdução GraphQL

## Modelo cliente servidor

### Cliente

- Usa recursos de rede
- Faz solicitações para o servidor
- Aguarda e recebe respostas do servidor

### Servidor

- Fornece recursos de rede
- Recebe solicitações
- Responde executando serviços ou disponibilizando respostas

O servidor também pode assumir o papel de cliente quando, por exemplo, em um servidor de banco de dados em aplicação back-end, a aplicação é o cliente do servidor de banco de dados.

# Padrão de requisição e resposta

Usando recursos de rede, os clientes fazem requisições para os servidores que as processam e enviam respostas.

Cliente faz uma requição -> requisição é ouvida pelo servidor -> servidor faz o processo da requisição -> servidor devolve uma resposta para o cliente

## Anatomia de uma requisição HTTP

- método, URL (rota + parâmetro), versão do HTTP
    - POST /sign-in HTTP/1.1
- cabeçalhos
    - accept enconding: descreve que tipo de enconding é aceito
    - accept language: linguagens aceitas
    - host: hosts aceitos
    - o cabeçalho variam a estrutura dependendo do tipo de serviços/implementações etc
- linha em branco (pra separar cabeçalho e corpo)
- corpo
    - o que vai ser recebido no servidor
    - é opcional 
    - exemplo: email=example@example.com&password=123456

## Anatomia de uma resposta HTTP

- versão do HTTP, código e mensagem de status
    - HTTP/1.1 200 OK
- cabeçalhos
    - podem variar
- corpo
    - o que vai ser devolvido para o cliente

### Tipos de códigos de status HTTP

[Aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

Todos os códigos de status são compostos por 3 dígitos, em que o 1o dígito indica qual categoria de status ele é

#### Categorias:

1. repostas de informação
2. respostas de sucesso
3. redirecionamentos
4. erros do cliente
5. erros do servidor

