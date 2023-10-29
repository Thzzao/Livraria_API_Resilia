import ClientesRepository from "../Repository/ClientesRepository.js"

class ClientesServices {

  
static validaNome(nome){
      const regexNome = /^[a-zA-ZÀ-ú\s']+$/;
      if (regexNome.test(nome)){
          return true
      } else {
          throw new Error("Nome inválido, apenas letras")
      }
  }

static validaEndereco(endereco){
  if (endereco.length >= 3){
      return true
  } else {
      throw new Error("Endereço inválido, deve ter no mínimo 3 caracteres")
  }
}

static validaTelefone(telefone){
  const numeroLimpo = telefone.replace(/[^\d]/g, '');
  const telefoneInt = parseInt(numeroLimpo)
  const regexTelefone = /^[0-9]{10,11}$/

  if (regexTelefone.test(telefoneInt)){
      return true
  } else {
      throw new Error("Telefone inválido")
  }
}

static validaEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regexEmail.test(email)) {
      return true;
  } else {
      throw new Error("E-mail inválido");
  }
}

static validaCamposCliente( nome, endereco, telefone, email){
  const isValid = this.validaNome(nome) && this.validaEndereco(endereco) && this.validaTelefone(telefone) && this.validaEmail(email)
  if (isValid) {
      return true;
  } else {
      throw new Error("Dados inválido para o cliente");
  }
}
}

export default ClientesServices;