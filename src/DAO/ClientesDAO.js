import Clientes from "../models/Clientes.js";
import DAO from "./DAO.js";

//const CLIENTES_TABELA = "CLIENTES" // NAO UTILIZAMOS 

class ClientesDAO extends DAO{
    /**
     * INSERE dados nos CLIENTES
     * @param {Clientes} data 
     */

    static async inserirCliente(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO CLIENTES (ID, NOME, EMAIL, TELEFONE, ENDERECO) VALUES (?,?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * BUSCA todos os CLIENTES
     * @returns {Array<Clientes>}
     */
    static async buscarTodosOsClientes() {
      const query = `
      SELECT * FROM CLIENTES
      `;
      const result = await this.buscar(query);
      return result;
    }


    /**
      * BUSCA cliente por ID
      * @param {string} id 
      * @returns {Clientes}
      */
    static async buscarClientePorId(id) {
      const query = `
      SELECT * FROM CLIENTES WHERE ID = ?
      `;
      const result = await this.buscarPorId(query, [id]);
      return result;
    }

    /**
      * DELETA cliente por ID
      * @param {string} id 
      */
    static async deletarClientePorId(id) {
      const query = `
      DELETE FROM CLIENTES WHERE ID = ?
      `;
      await this.deletarPorId(query, [id]);
    }


    /**
     * ATUAL cliente por ID
     * @param {string} id 
     * @param {any} data 
    */
    static async atualizarClientePorId(id, data) {
      const query = `
      UPDATE CLIENTES SET NOME = ?, EMAIL = ?, TELEFONE = ?, ENDERECO=?  WHERE ID = ?
      `;
      const values = [data.nome, data.email, data.telefone, data.endereco, id];
      await this.atualizarPorId(query, values);
}


}

export default ClientesDAO;