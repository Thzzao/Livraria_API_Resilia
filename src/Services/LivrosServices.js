import LivrosDAO from "../DAO/LivrosDAO.js";

class ValidacaoServicesLivros {
  /**
   * Método que valida a existência do livro na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static async validarExistenciaLivro(id) {
    const livro = await LivrosDAO.buscarLivroPorId(id);
    return livro ? true : false;
  }

  /**
   * Método de validação de título do livro
   * @param {string} titulo
   * @returns {boolean}
   */
  static validaTitulo(titulo) {
    return typeof titulo === "string" && titulo.length > 2;
  }

  /**
   * Método de validação de preço do livro
   * @param {number} preco
   * @returns {boolean}
   */
  static validaPreco(preco) {
    return typeof preco === "number" && preco >= 0;
  }

  /**
   * Método de validação de gênero do livro
   * @param {string} genero
   * @returns {boolean}
   */
  static validaGenero(genero) {
    return typeof genero === "string" && genero.length > 2;
  }

  /**
   * Método de validação de idioma do livro
   * @param {string} titulo
   * @returns {boolean}
   */
  static validaIdioma(idioma) {
    return typeof idioma === "string" && idioma.length > 2;
  }

  /**
   * Método para validação de todos os campos fornecidos para atualização de um livro
   * @param {string} titulo
   * @param {number} preco
   * @param {string} genero
   * @param {string} idioma
   * @returns {boolean}
   */
  static validaCamposLivro(titulo, preco, genero, idioma) {
    const isValid =
      this.validaTitulo(titulo) &&
      this.validaPreco(preco) &&
      this.validaGenero(genero) &&
      this.validaIdioma(idioma);
    return isValid;
  }
}

export default ValidacaoServicesLivros;
