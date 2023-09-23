import AutoresDAO from "../DAO/AutoresDAO.js";
import LivrosDAO from "../DAO/LivrosDAO.js";

class ValidacaoServicesAutor {
  /**
   * Método que valida a existencia do autor na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static validarExistenciaAutor(id) {
    const autor = AutoresDAO.buscarAutorPorId(id);
    if (autor) {
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
   * Método de validação de pais
   * @param {string} pais
   * @returns {boolean}
   */
  static validaPais(pais) {
    return typeof pais == "string" && pais.length > 2;
  }

  /**
   * Método que valida a existencia do livro na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static validarExistenciaLivro(id) {
    const livro = LivrosDAO.buscarLivroPorId(id);
    if (livro) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Método para validação de todos os campos fornecidos na entidade autores
   * @param {string} nome
   * @param {string} pais
   * @returns
   */
  static validaAutor(nome, pais, livro) {
    const isValid =
      this.validaNome(nome) &&
      this.validaPais(pais) &&
      this.validarExistenciaLivro(livro);
    return isValid;
  }
}

export default ValidacaoServicesAutor;
