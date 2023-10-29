import Pedidos from "../models/Pedidos.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class PedidosRepository {
  static async inserirPedido(pedido) {
    const response = await RepositoryGeneral.create(Pedidos, pedido);
    return response;
  }

  static async buscarTodosOsPedidos() {
    const result = await RepositoryGeneral.buscar(Pedidos);
    return result;
  }

    static async buscarPedidoPorCliente(cliente) {
      const result = await RepositoryGeneral.buscarPorChave(Pedidos, "cliente", cliente);
      return result;
    }
  
    static async buscarPedidoPorId(id) {
      const result = await RepositoryGeneral.buscarPorId(Pedidos, id);
      return result;
    }
  
  static async deletarPedidoPorId(id) {
    const result = await RepositoryGeneral.deletarPorId(Pedidos, id)
    return result;
  }

  static async atualizarPedidoPorId(id, pedido) {
    const result = await RepositoryGeneral.atualizarPorId(Pedidos, id, pedido)
    return result;
  }

}

export default PedidosRepository;
