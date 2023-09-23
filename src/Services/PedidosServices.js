import PedidosDAO from "../DAO/PedidosDAO.js";
import LivrosDAO from "../DAO/LivrosDAO.js";

class ValidacaoServicesPedidos {
  /**
   * Método que valida a existencia do usuário na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static validarExistenciaPedido(id) {
    const pedido = PedidosDAO.buscarPedidoPorId(id);
    if (pedido) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Método de validação de nome
   * @param {string} titulo
   * @returns {boolean}
   */
  static validaTitulo(titulo) {
    return typeof titulo == "string" && titulo.length > 2;
  }

  /**
   * Método de validação de pagamento
   * @param {string} pagamento
   * @returns {boolean}
   */
  static validaPagamento(pagamento) {
    const opcoesValidas = ["Boleto", "PIX", "Credito", "Débito"];
    return opcoesValidas.includes(pagamento);
  }

  /**
   * Método para validação de todos os campos fornecidos pelo cliente na entidade usuário
   * @param {string} titulo
   * @param {string} pagamento
   * @returns
   */
  static validaCamposPedido(titulo, pagamento) {
    const isValid =
      this.validaTitulo(titulo) && this.validaPagamento(pagamento);
    return isValid;
  }
}

export default ValidacaoServicesPedidos;
