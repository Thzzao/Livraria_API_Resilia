/** Script de importação do banco e das funções de criação e população **/
import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as criaTabela from "./criarTabelas.js";
import * as populaTabela from "./popularTabelas.js";

//Torna as ações do SQLite legiveis no terminal
sqlite3.verbose()

//Aponta o caminho onde será salvo o arquivo database.db
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db"

//Inicializa o banco de dados SQLite
const Database = new sqlite3.Database(filePath)

export default Database


/** Roda as funções de criação de tabela e população em serie (Uma após a outra) **/

Database.serialize(() => {
    criaTabela.criaTabelaLivros();
    populaTabela.populaTabelaLivros();

    criaTabela.criaTabelaAutores();
    populaTabela.populaTabelaAutores();

    criaTabela.criaTabelaGeneros();
    populaTabela.populaTabelaGeneros();

    criaTabela.criaTabelaEditoras();
    populaTabela.populaTabelaEditoras();

    criaTabela.criaTabelaClientes();
    populaTabela.populaTabelaClientes();

    criaTabela.criaTabelaPedidos();
    populaTabela.populaTabelaPedidos();
})