
# Espaço das Letras - API 📚

Bem-vindos ao Espaço das Letras, o seu novo destino literário online. Nós somos uma pequena livraria/sebo apaixonada por livros e pela cidade de Curitiba, e estamos aqui para compartilhar histórias e conhecimento de forma acessível e conveniente. 

## Descrição 🧾

Nesse projeto foi criado uma API Rest para uma livraria, desenvolvido em Node.js com framework Express.

## Requisitos 🗝️

Antes de começar, certifique-se de que as seguintes tecnologias estejam devidamente instaladas em sua máquina:

* [VS Code](https://code.visualstudio.com/download)
* [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

* [Node.js](https://nodejs.org/en)

## Banco de Dados 📊

Essas são as entidades do nosso banco de dados:

* Clientes
* Pedidos
* Livros 
* Gêneros
* Autores
* Editoras 

## Dependências ⛓️ 

```bash
   cors: "^2.8.5"
```

```bash
   expres": "^4.18.2"
```

```bash
   path: "^0.12.7"
```

```bash
   sqlite3: "^5.1.6"
```

```bash
   url: "^0.11.2"
```


## Instalação 🔌

Abra seu terminal e execute os comandos a seguir:

* **Clone o projeto:**

```bash
  git clone https://github.com/JulieneCarneiro/BackEnd_API.git
```

* **Entrando na pasta:**

```bash
  cd BackEnd_API
```

* **Abra o VS Code:**

```bash
  code . 
```
No terminal do VS Code: 

* **Instale as dependências:**

```bash
  npm install
```

* **Inicie o servidor:**

```bash
  npm start
```

## Exemplos de respostas 🗃️



***POST - Rota:***

```bash
 http://localhost:3000/pedidos
```
A rota post cria um pedido.

Entrada

Copie o código json abaixo e insira no body da requisição http:

```
{
    "CLIENTE": 1,
    "TITULO": "O poder da leitura",
    "QUANTIDADE": "1",
    "VALOR": "42.90",
    "PAGAMENTO": "PIX"
}


``` 
Saída

```
"Pedido criado com sucesso!"

```

<!-- localhost:3000/generos/ -->
***GET - Rota:*** 

```bash
 http://localhost:3000/generos
```

A rota get lista os gêneros.

Entrada

```
Apenas digite a rota com o comando GET na URL
```
Saída

```
[
  {
    "ID": 1,
    "LIVROS": 2,
    "NOME": "ROMANCE"
  },
  {
    "ID": 2,
    "LIVROS": 3,
    "NOME": "COMEDIA"
  },
  {
    "ID": 3,
    "LIVROS": 1,
    "NOME": "ACADEMICOS"
  },
  {
    "ID": 4,
    "LIVROS": 4,
    "NOME": "TERROR"
  },
  {
    "ID": 5,
    "LIVROS": 5,
    "NOME": "DRAMA"
  }...
]
```


***PATCH - Rota:***

```bash
 http://localhost:3000/livros/2
```

A rota patch modifica algum livro.

É importante destacar que no banco de dados, o livro com o ID 2 é exibido da seguinte forma:

```
  {
    "ID": 2,
    "TITULO": "A deusa do desamor",
    "PRECO": 26.9,
    "AUTOR": 2,
    "GENERO": "ROMANCE",
    "EDITORA": 2,
    "IDIOMA": "Portugues"
  }

```
Entrada

Copie o código json abaixo e insira no body da requisição http:

```
  {
    "TITULO": "OFERTA: A deusa do desamor",
    "PRECO": 20.0,
    "AUTOR": 2,
    "GENERO": "ROMANCE",
    "EDITORA": 2,
    "IDIOMA": "Portugues"
  }
```

Saída
```
"Livro alterado com sucesso!"
```


***PUT - Rota:***

```bash
  http://localhost:3000/clientes/3
```

A rota put modifica um cliente.

É importante destacar que no banco de dados, o cliente com o ID 3 é exibido da seguinte forma::
```
  {
    "ID": 3,
    "NOME": "Joelma Kalipiçon",
    "EMAIL": "jojokali@yahoo.com",
    "TELEFONE": "41 99356-1478",
    "ENDERECO": "Rua Jose Arruda, 398 - Bairro: Solidão"
  }
```

Entrada

Copie o código json abaixo e insira no body da requisição http:

```
  {
    "NOME": "JoelmaKalipiçon123",
    "EMAIL": "jojokali@yahoo.com",
    "TELEFONE": "41 99356-1478",
    "ENDERECO": "Rua Jose Arruda, 398 - Bairro: Solidão"
  }
```

Saída

```
`Cliente atualizado com sucesso`
```


***DELETE - Rota:***

```bash
  http://localhost:3000/clientes/3
```

A rota delete remove um autor.

É importante destacar que no banco de dados, os autores são exibidos da seguinte forma::
```
[
  {
    "ID": 1,
    "NOME": "Carlos Duhigg",
    "PAIS": "Brasil",
    "LIVROS": 1
  },
  {
    "ID": 2,
    "NOME": "Julia ZZagonel",
    "PAIS": "Brasil",
    "LIVROS": 2
  },
  {
    "ID": 3,
    "NOME": "Emma Liord",
    "PAIS": "Estados Unidos",
    "LIVROS": 3
  }...
]
``` 


Entrada

Digite a URL com o comando DELETE passando o ID do livro que você deseja excluir:

```bash
  http://localhost:3000/autores/1
```

Saída

```

"Autor deletado com sucesso!"

```
## Referências 📌

 - [Express](https://expressjs.com/pt-br/)
 - [Sqlite3](https://www.sqlite.org/docs.html)
 - [Node.js](https://nodejs.org/en)
- [Thunder Client](https://www.thunderclient.com/)

## Autores 🖊️

- **Juliene Carneiro** - [GitHub](https://github.com/JulieneCarneiro) - [LinkedIn](https://www.linkedin.com/in/juliene-s-carneiro/)

- **Laís Muller** -  [GitHub](https://github.com/laismullerrr) - [LinkedIn](https://www.linkedin.com/in/laismulleraliski/)

- **Thiago de Souza** -  [GitHub](https://github.com/Thzzao) - [LinkedIn](https://www.linkedin.com/in/thiagojdss/) 

- **Leticia Oliveira** -  [GitHub](https://github.com/Letiti4) - [LinkedIn](https://www.linkedin.com/in/leticia-oliveira-1955301b8/) 

- **Lucio Martins** -  [GitHube](https://github.com/LucioMartinsDw) - [LinkedIn](https://www.linkedin.com/in/luciomartinswebdev/) 


