# API de Gerenciamento de Produtos

Esta é uma API simples para interagir com produtos, permitindo ações como registro, busca, atualização e exclusão de informações de produtos no banco de dados. 

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de prosseguir:

- Node.js v18.16.1
- npm v9.5.1
- TypeScript v5.2.2
- Express.js v4.18.2
- Knex.js v2.5.1
- SQLite3 v5.1.6
- @types/express v4.17.18
- ts-node-dev v2.0.0

## Instalação

1. Clone este repositório:

```shell
git clone https://github.com/davidmarquescoder/rest-api-node-typescript.git
cd rest-api-node-typescript
```

2. Instale as dependências:

```shell
npm install
```

3. Inicie o servidor de desenvolvimento:

```shell
npm start
```

## Rotas da API

### Buscar Todos os Produtos

Endpoint: `GET /products`

Esta rota retorna todos os produtos cadastrados no banco de dados.

### Buscar um Produto por ID

Endpoint: `GET /products/{productId}`

Esta rota permite buscar um produto específico com base no seu ID.

### Inserir um Produto

Endpoint: `POST /products`

Para inserir um novo produto, envie um JSON no corpo da solicitação com os seguintes campos:

- `name` (obrigatório, único)
- `description` (opcional, máximo de 500 caracteres)
- `price` (obrigatório, valor positivo)
- `stock` (obrigatório, valor inteiro positivo)

### Atualizar um Produto

Endpoint: `PUT /products/:id`

Para atualizar um produto, envie um JSON no corpo da solicitação com os campos que deseja atualizar, seguindo as mesmas validações da rota de inserção.

### Excluir um Produto

Endpoint: `DELETE /products/:id`

Esta rota permite excluir um produto com base no seu ID.

## Exemplos de Uso

Aqui estão alguns exemplos de como usar a API com `curl`:

- Buscar todos os produtos:

```shell
curl http://localhost:3333/products
```

- Buscar um produto por ID:

```shell
curl http://localhost:3333/products/1
```

- Inserir um novo produto:

```shell
curl -X POST -H "Content-Type: application/json" -d '{"nome": "Produto A", "descricao": "Descrição do Produto A", "preco": 19.99, "quantidade": 100}' http://localhost:3333/products
```

- Atualizar um produto:

```shell
curl -X PUT -H "Content-Type: application/json" -d '{"descricao": "Nova descrição do Produto A"}' http://localhost:3333/products/1
```

- Excluir um produto:

```shell
curl -X DELETE http://localhost:3333/products/1
```

Lembre-se de que esses são apenas exemplos e você pode usar ferramentas mais avançadas para testar e interagir com a API, como o Postman ou o Insomnia.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE.md para obter detalhes.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, sinta-se à vontade para abrir uma [issue](https://github.com/davidmarquescoder/rest-api-node-typescript/issues) ou enviar uma [pull request](https://github.com/davidmarquescoder/rest-api-node-typescript/pulls).

---