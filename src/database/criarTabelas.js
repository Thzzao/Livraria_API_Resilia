// Importação da base de dados 
import Database from "./Database.js";

/** Script de criação das tabelas **/

// Criação da tabela LIVROS
const LIVROS_TABLE = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(100),
    "PRECO" DOUBLE(10),
    "AUTOR" INT,
    "GENERO" varchar(100),
    "EDITORA" INT,
    "IDIOMA" varchar(30)
);
`
// Criação da tabela AUTORES
const AUTORES_TABLE = `
CREATE TABLE IF NOT EXISTS "AUTORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "PAIS" varchar(100),
    "LIVROS" INT
);
`
// Criação da tabela GENEROS
const GENEROS_TABLE = `
CREATE TABLE IF NOT EXISTS "GENEROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "LIVROS" INT,
    "NOME" varchar(100)
);
`
// Criação da tabela EDITORAS
const EDITORAS_TABLE = `
CREATE TABLE IF NOT EXISTS "EDITORAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "EMAIL" varchar(100),
    "TELEFONE" varchar(11)
);
`
// Criação da tabela CLIENTES
const CLIENTES_TABLE = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "EMAIL" varchar(100),
    "TELEFONE" varchar(11),
    "ENDERECO" varchar(200)
);
`
// Criação da tabela PEDIDOS
const PEDIDOS_TABLE = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NUM_PEDIDO" varchar(6),
    "CLIENTE" INT,
    "TITULO" varchar(100),
    "QUANTIDADE" varchar(6),
    "VALOR" varchar(10),
    "PAGAMENTO" varchar(15)
);
`

/** Funções de aplicação da criação das tabelas usando o SQLite **/

export function criaTabelaLivros() {
    Database.run(LIVROS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Livros")
        } else {
            console.log("Tabela Livros criada com sucesso")
        }
    });
}

export function criaTabelaAutores() {
    Database.run(AUTORES_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Autores")
        } else {
            console.log("Tabela Autores criada com sucesso")
        }
    });
}

export function criaTabelaGeneros() {
    Database.run(GENEROS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Gêneros")
        } else {
            console.log("Tabela Gêneros criada com sucesso")
        }
    });
}

export function criaTabelaEditoras() {
    Database.run(EDITORAS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela das Editoras")
        } else {
            console.log("Tabela Editoras criada com sucesso")
        }
    });
}

export function criaTabelaClientes() {
    Database.run(CLIENTES_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Clientes")
        } else {
            console.log("Tabela Clientes criada com sucesso")
        }
    });
}

export function criaTabelaPedidos() {
    Database.run(PEDIDOS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela dos Pedidos")
        } else {
            console.log("Tabela Pedidos criada com sucesso")
        }
    });
}




