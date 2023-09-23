import GenerosDAO from "../DAO/GenerosDAO.js";

class ValidacaoServicesGeneros {
  /**
   * Método que valida a existencia do gênero na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static validarExistenciaGenero(id) {
    const genero = GenerosDAO.buscarGeneroPorId(id);
    if (genero) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Método de validação do nome do gênero
   * @param {string} nome
   * @returns {boolean}
   */
  static validaNome(nome) {
    return typeof nome == "string" && nome.length > 3;
  }
}
export default ValidacaoServicesGeneros;
