import ClientesDAO from "../DAO/ClientesDAO.js";

class ValidacaoServicesCliente {
  /**
   * Método que valida a existencia do usuário na base de dados
   * @param {string} id
   * @returns {boolean}
   */
  static validarExistenciaCliente(id) {
    const cliente = ClientesDAO.buscarClientePorId(id);
    if (cliente) {
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
   * Método para validação do endereço
   * @param {string} endereco
   * @returns {boolean}
   */
  static validaEndereco(endereco) {
    return endereco.length >= 5;
  }

  /**
   * Método para validação de todos os campos fornecidos pelo cliente na entidade usuário
   * @param {string} nome
   * @param {string} email
   * @param {string} telefone
   * @param {string} endereco
   * @returns
   */
  static validaCamposCliente(nome, email, telefone, endereco) {
    const isValid =
      this.validaNome(nome) &&
      this.validaEmail(email) &&
      this.validaTelefone(telefone) &&
      this.validaEndereco(endereco);
    return isValid;
  }
}

export default ValidacaoServicesCliente;
