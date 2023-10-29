import mongoose from "mongoose";

class RepositoryGeneral {
  

  static async create(EntidadeMongo, input){
    try { 
    await EntidadeMongo.create(input)
    return {Sucesso: "Sucesso no registro!"}
      
    } catch (error) {
      console.log(error)
      
    }
}

static async findAll(EntidadeMongo){
  const response = await EntidadeMongo.find()
  return response
}

  static async buscarPorId(EntidadeMongo, id) {
    const response = await EntidadeMongo.find({ _id: id });
    return response;
  }

  static async buscarPorNome(EntidadeMongo, nome, value) {
    const response = await EntidadeMongo.findOne({ [nome]: value });
    return response;
  }

  static async buscarPorChave(EntidadeMongo, chave, value) {
    const result = await EntidadeMongo.findOne({ [chave]: value });
    return result;
  }

  static async deletarPorId(EntidadeMongo, id) {
    await EntidadeMongo.findOneAndDelete({ _id: id });
    return { Message: "Registo deletado com sucesso", id };
  }

  static async atualizarPorId(EntidadeMongo, id, input) {
    try {await EntidadeMongo.updateOne({ _id: id }, input);
    return { Message: "Registo atualizado com sucesso", id };
    } catch (error) {
      console.log(error)
    }
  }
}

export default RepositoryGeneral;
