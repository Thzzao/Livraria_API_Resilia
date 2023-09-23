import Autores from "../models/Autores.js";
import DAO from "./DAO.js";


class AutoresDAO extends DAO{
    /**
     * INSERIR DADOS na tabela AUTORES
     * @param {Autores} data 
     */
  
    static async inserirAutor(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO AUTORES (ID, NOME, PAIS, LIVROS) VALUES (?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA TUDO pelo ID
     * @returns {Array<Clientes>}
     */
    static async buscarTodosOsAutores() {
      const query = `
      SELECT * FROM AUTORES
      `;
      const result = await this.buscar(query);
      return result;
    }

    /**
      * BUSCA pelo ID
      * @param {string} id 
      * @returns {Clientes}
      */
    static async buscarAutorPorId(id) {
      const query = `
      SELECT * FROM AUTORES WHERE ID = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

    /**
      * DELETA pelo ID 
      * @param {string} id 
      */
    static async deletarAutorPorId(id) {
      const query = `
      DELETE FROM AUTORES WHERE ID = ?;
      `;
      await this.deletarPorId(query, id);
    }

    /**
     * ATUALIZA pelo ID
     * @param {string} id 
     * @param {any} data 
    */
    static async atualizarAutorPorId(id, data) {
      const query = `
      UPDATE AUTORES SET NOME = ?, PAIS = ?, LIVROS = ? WHERE ID = ?
      `;
      const values = [data.nome, data.pais, data.livros, id];
      await this.atualizarPorId(query, values);
}
    

}

export default AutoresDAO;