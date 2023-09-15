// Importação da base de dados 
import Database from "./Database.js";

/** Script de inserção dos dados na base **/

//Adicionando LIVROS
const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (TITULO, PRECO, AUTOR, GENERO, EDITORA, IDIOMA)
VALUES 
    ('O poder da leitura', '42.90', '1', 'ACADEMICOS', '1', 'Portugues'),
    ('A deusa do desamor', '26.90', '2', 'ROMANCE', '2', 'Portugues'),
    ('Tweet Cute', '41.90', '3', 'COMEDIA', '3', 'Ingles')
`
//Adicionando AUTORES
const ADD_AUTORES_DATA = `
INSERT INTO AUTORES (NOME, PAIS, LIVROS)
VALUES 
    ('Carlos Duhigg', 'Brasil', '1'),
    ('Julia ZZagonel', 'Brasil', '2'),
    ('Emma Liord', 'Estados Unidos', '3')
`
//Adicionando GENEROS
const ADD_GENEROS_DATA = `
INSERT INTO GENEROS (LIVROS, NOME)
VALUES 
    ('2', 'ROMANCE'),
    ('3', 'COMEDIA'),
    ('1', 'ACADEMICOS')
`
//Adicionando EDITORAS
const ADD_EDITORAS_DATA = `
INSERT INTO EDITORAS (NOME, EMAIL, TELEFONE)
VALUES 
    ('Objetivo', 'objetivo.editora@gmail.com', '41 3235-6669'),
    ('AZT', 'aztedit@hotmail.com', '11 3007-4789'),
    ('Wednerday the books', 'wednerday.ed.books@yahoo.com', '1 408 323-6581')
`
//Adicionando CLIENTES
const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (NOME, EMAIL, TELEFONE, ENDERECO)
VALUES 
    ('Robson Ademir', 'robinho123@gmail.com', '41 99519-8777', 'Rua Trajetoria Triste, 6669 - Bairro: Depressão'),
    ('Michel Teló', 'michael159telozin@hotmail.com', '11 99878-5564', 'Rua Leonardo Sistemico, 523 - Bairro: Sitio Cercado'),
    ('Joelma Kalipiçon', 'jojokali@yahoo.com', '41 99356-1478', 'Rua Jose Arruda, 398 - Bairro: Solidão'),
    ('Léo Stronda', 'leleostrondinha@yahoo.com', '24 95366-9275', 'Rua Leoncio ovelha, 666 - Bairro: CIC Loko'),
    ('Silvio Santinho', 'sil002@gmail.com', '11 98654-2145', 'Rua Trejano Reis, 350 - Bairro: Centro')
`
//Adicionando PEDIDOS
const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (NUM_PEDIDO, CLIENTE, TITULO, QUANTIDADE, VALOR, PAGAMENTO)
VALUES 
    ('123', '1', 'O poder da leitura', '1', '42.90', 'PIX'),
    ('124', '2', 'A deusa do desamor', '2', '53.80', 'Credito'),
    ('125', '3', 'Tweet Cute', '1', '41.90', 'PIX'),
    ('126', '4', 'Tweet Cute', '1', '41.90', 'Boleto'),
    ('127', '5', 'O poder da leitura', '3', '128.70', 'Débito')
`


/** Funções que polula via SQLite as tabelas */

export function populaTabelaLivros() {
    Database.run(ADD_LIVROS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Livros")
        }
        else {
            console.log("Tabela Livros populada com sucesso")
        }
    });
}

export function populaTabelaAutores() {
    Database.run(ADD_AUTORES_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela dos Autores")
        }
        else {
            console.log("Tabela Autores populada com sucesso")
        }
    });
}

export function populaTabelaGeneros() {
    Database.run(ADD_GENEROS_DATA, (error) => {
        if (error) {
            console.log(error.message)
            console.log("Erro ao popular tabela de Gêneros")
        }
        else {
            console.log("Tabela Gêneros populada com sucesso")
        }
    });
}

export function populaTabelaEditoras() {
    Database.run(ADD_EDITORAS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela das Editoras")
        }
        else {
            console.log("Tabela Editoras populada com sucesso")
        }
    });
}

export function populaTabelaClientes() {
    Database.run(ADD_CLIENTES_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela dos Clientes")
        }
        else {
            console.log("Tabela Clientes populada com sucesso")
        }
    });
}

export function populaTabelaPedidos() {
    Database.run(ADD_PEDIDOS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Pedidos")
        }
        else {
            console.log("Tabela Pedidos populada com sucesso")
        }
    });
}

