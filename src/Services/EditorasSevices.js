import Editoras from "../models/Editoras.js";
import EditorasDAO from "../DAO/EditorasDAO.js";

class ValidacaoServicesEditora {
  /**
   * Método que valida a existencia do gênero na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static validarExistenciaEditora(id) {
    const genero = EditorasDAO.buscarEditoraPorId(id);
    if (genero) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Método de validação de nome
   * @param {string} nome
   * @returns {boolean}
   */
  static validaNome(nome) {
    return typeof nome == "string" && nome.length > 2;
  }

  /**
   * Método para validação de email
   * @param {string} email
   * @returns {boolean}
   */
  static validaEmail(email) {
    return typeof email == "string" && email.length > 2;
  }

  /**
   * Método para validação de telefone
   * @param {string} telefone
   * @returns {boolean}
   */
  static validaTelefone(telefone) {
    // Verifica se o telefone é uma string e tem um comprimento mínimo de 10 caracteres (assumindo que inclui o DDD)
    return typeof telefone === "string" && telefone.length >= 10;
  }

  /**
   * Método para validação de todos os campos
   * @param {string} nome
   * @param {string} email
   * @param {string} telefone
   * @returns
   */
  static validaCamposEditora(nome, email, telefone) {
    const isValid =
      this.validaNome(nome) &&
      this.validaEmail(email) &&
      this.validaTelefone(telefone);
    return isValid;
  }
}
export default ValidacaoServicesEditora;
