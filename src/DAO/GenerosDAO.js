import Generos from "../models/Generos.js";
import DAO from "./DAO.js";


class GenerosDAO extends DAO{
    /**
     * INSERE dados nos GENEROS
     * @param {Generos} data 
     */
    ////////////////////// ESSE AQUI TA FUNCIONANDO TAOKEI
    static async inserirGenero(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO GENERO (ID, LIVROS, NOME) VALUES (?, ?, ?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA todos os GENEROS
     * @returns {Array<Generos>}
     */
    static async buscarTodosOsGeneros() {
      const query = `
      SELECT * FROM GENEROS
      `;
      const result = await this.buscar(query);
      return result;
    }


    /**
      * BUSCA genero por ID
      * @param {string} id 
      * @returns {Generos}
      */
    static async buscarGeneroPorId(id) {
      const query = `
      SELECT * FROM GENEROS WHERE ID = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

    /**
      * DELETA cliente por ID
      * @param {string} id 
      */
    static async deletarGeneroPorId(id) {
      const query = `
      DELETE FROM GENEROS WHERE ID = ?
      `;
      await this.deletarPorId(query, [id]);
    }


    /**
     * ATUALIZA genero por ID
     * @param {string} id 
     * @param {any} data 
    */
    static async AtualizarGeneroPorId(id, data) {
      const query = `
      UPDATE GENEROS SET LIVROS = ?, NOME = ? WHERE ID = ?
      `;
      const values = [data.livros, data.nome, id];
      await this.atualizarPorId(query, values);
}}

export default GenerosDAO;